export default function LoadingFallback() {
  return (
    <div className="relative w-60 h-60 flex items-center justify-center">
      <div className="w-20 h-20 rounded-full border-4 border-foreground/30 border-t-foreground/80 animate-spin"></div>
    </div>
  )
}
