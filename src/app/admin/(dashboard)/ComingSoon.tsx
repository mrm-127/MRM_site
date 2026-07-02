export function ComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h1 className="mb-1 text-lg font-bold text-navy">{title}</h1>
      <p className="mb-6 text-sm text-muted">{description}</p>

      <div className="rounded-2xl border border-dashed border-line bg-white p-10 text-center">
        <p className="text-sm text-muted">این بخش به‌زودی اضافه می‌شود.</p>
      </div>
    </div>
  );
}
