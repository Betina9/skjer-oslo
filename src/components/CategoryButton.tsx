import type { LucideIcon } from "lucide-react";

interface CategoryButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  color: string;
  icon: LucideIcon;
}

function CategoryButton({
  label,
  isActive,
  onClick,
  color,
  icon: Icon,
}: CategoryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`
        flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-3
        text-sm font-medium transition-all hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
        ${
          isActive
            ? `${color} border-transparent shadow-sm`
            : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:shadow-sm"
        }
      `}
    >
      <Icon size={18} strokeWidth={2} aria-hidden="true" />
      {label}
    </button>
  );
}

export default CategoryButton;
