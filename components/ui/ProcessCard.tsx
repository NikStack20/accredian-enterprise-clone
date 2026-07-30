// components/ui/ProcessCard.tsx
import { LucideIcon } from "lucide-react";

interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ProcessCard({ step, title, description, icon: Icon }: ProcessCardProps) {
  return (
    <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <span className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white text-xs font-semibold h-8 w-8">
        {step}
      </span>
      <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <Icon size={22} strokeWidth={2} />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}