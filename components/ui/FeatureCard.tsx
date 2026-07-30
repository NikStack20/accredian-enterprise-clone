// components/ui/FeatureCard.tsx
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-blue-200">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon size={22} strokeWidth={2} />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}