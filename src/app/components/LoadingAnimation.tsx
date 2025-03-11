export default function LoadingAnimation() {
  return (
    <div className="relative w-60 h-60 md:w-72 md:h-72">
      {/* Background glow effect */}
      <div className="absolute inset-0 rounded-full bg-foreground/5 animate-pulse"></div>

      {/* Central circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-foreground/10 rounded-full animate-pulse"></div>

      {/* Rotating rings */}
      <div
        className="absolute inset-4 rounded-full border-2 border-dashed border-foreground opacity-20 animate-spin"
        style={{ animationDuration: '15s' }}
      ></div>
      <div
        className="absolute inset-10 rounded-full border-2 border-dashed border-foreground opacity-30 animate-spin"
        style={{ animationDuration: '12s', animationDirection: 'reverse' }}
      ></div>
      <div
        className="absolute inset-16 rounded-full border-2 border-dashed border-foreground opacity-20 animate-spin"
        style={{ animationDuration: '9s' }}
      ></div>

      {/* Central pulsing dots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-foreground animate-ping"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-foreground"></div>
    </div>
  )
}
