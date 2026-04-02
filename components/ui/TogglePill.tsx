type Option<T extends string> = {
  value: T;
  label: string;
};

type TogglePillProps<T extends string> = {
  value: T;
  onChange: (value: T) => void;
  options: Option<T>[];
};

export default function TogglePill<T extends string>({
  value,
  onChange,
  options,
}: TogglePillProps<T>) {
  return (
    <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
      {options.map((option) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              isActive
                ? "bg-[var(--accent)] text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}