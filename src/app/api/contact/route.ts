import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Simple rate limiting implementation
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5
const ipRequests = new Map<string, { count: number; resetTime: number }>()

// Helper for input validation
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(req: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = req.headers.get('x-forwarded-for') || 'unknown'

    // Check rate limit
    const now = Date.now()
    const ipData = ipRequests.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW }

    // Reset counter if window expired
    if (now > ipData.resetTime) {
      ipData.count = 0
      ipData.resetTime = now + RATE_LIMIT_WINDOW
    }

    // Enforce rate limit
    if (ipData.count >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { message: 'Too many requests, please try again later' },
        { status: 429 }
      )
    }

    // Increment counter and update map
    ipData.count++
    ipRequests.set(ip, ipData)

    const body = await req.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 })
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json({ message: 'Invalid email format' }, { status: 400 })
    }

    // Validate input lengths
    if (name.length > 100 || email.length > 100 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json({ message: 'Input length exceeds allowed limit' }, { status: 400 })
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Sanitize inputs for email (basic sanitization)
    const sanitizedName = name.replace(/[<>]/g, '')
    const sanitizedSubject = subject.replace(/[<>]/g, '')
    const sanitizedMessage = message.replace(/[<>]/g, '')

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'hey@kanerep.com',
      subject: `Contact Form: ${sanitizedSubject}`,
      replyTo: email,
      text: `
        Name: ${sanitizedName}
        Email: ${email}
        Subject: ${sanitizedSubject}
        Message: ${sanitizedMessage}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${sanitizedSubject}</p>
        <p><strong>Message:</strong> ${sanitizedMessage}</p>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 })
  }
}
