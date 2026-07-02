export function StatTile({
  label,
  value,
  hint,
  muted,
}: {
  label: string;
  value: string;
  hint?: string;
  muted?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-card">
      <p className="mb-3 text-sm text-muted">{label}</p>
      <p
        className={`text-2xl font-bold ${muted ? "text-muted" : "text-navy"}`}
      >
        {value}
      </p>
      {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
    </div>
  );
}
