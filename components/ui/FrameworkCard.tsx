// components/ui/FrameworkCard.tsx
import { LucideIcon } from "lucide-react";

interface FrameworkCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function FrameworkCard({ title, description, icon: Icon }: FrameworkCardProps) {
  return (
    <div className="flex flex-col items-center text-center rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <Icon size={26} strokeWidth={2} />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}