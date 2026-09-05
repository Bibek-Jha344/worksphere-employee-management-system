type InputProps = {
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  className?: string;
};

export function Input({
  label,
  id,
  type = "text",
  placeholder,
  className = "",
}: InputProps) {
  return (
    <div className="space-y-2">
      {label ? (
        <label htmlFor={id} className="text-sm font-medium text-slate-700">
          {label}
        </label>
      ) : null}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-brand-500 ${className}`}
      />
    </div>
  );
}
