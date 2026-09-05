type CardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <section
      className={`rounded-xl border border-slate-200 bg-white p-5 shadow-soft ${className}`}
    >
      {title ? (
        <h3 className="mb-4 text-lg font-semibold text-slate-900">{title}</h3>
      ) : null}
      {children}
    </section>
  );
}
