interface StatBadgeProps {
  value: string;
  label: string;
}

export default function StatBadge({ value, label }: StatBadgeProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-syne font-bold text-2xl text-accent-light leading-none">
        {value}
      </span>
      <span className="font-inter text-xs text-white/50 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}
