export function QedLogo({ className = "h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 48"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="质能达微电子 QED Micro"
    >
      {/* QED text mark */}
      <defs>
        <linearGradient id="qed-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <rect x="0" y="4" width="40" height="40" rx="8" fill="url(#qed-grad)" />
      <text x="20" y="30" textAnchor="middle" fill="white" fontWeight="900" fontSize="16" fontFamily="Inter, sans-serif">
        QED
      </text>
      <text x="52" y="24" fill="#1e293b" fontWeight="800" fontSize="20" fontFamily="Inter, Noto Sans SC, sans-serif">
        质能达
      </text>
      <text x="52" y="38" fill="#94a3b8" fontWeight="500" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="2">
        MICRO ELECTRONICS
      </text>
    </svg>
  );
}
