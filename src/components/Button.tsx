import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonProps = {
  children: React.ReactNode
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'text'
  onClick?: () => void
  className?: string
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
  icon?: React.ReactNode
  href?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  className,
  type = 'button',
  disabled = false,
  icon,
  href,
  size = 'md',
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-600/80',
    secondary: 'bg-gray-600 text-white hover:bg-gray-600/80',
    outline: 'border border-emerald-600 text-emerald-600 hover:bg-emerald-600/10',
    ghost: 'hover:bg-emerald-600/10',
    text: 'text-foreground/80  underline underline-offset-4 hover:text-foreground/90',
  }

  const baseClasses =
    'inline-flex items-center gap-2 px-6 py-3 text-lg font-medium rounded-2xl transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2'

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-lg',
    lg: 'px-8 py-4 text-xl',
  }

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      >
        {children}
        {icon && icon}
      </Link>
    )
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
      {icon && icon}
    </button>
  )
}
