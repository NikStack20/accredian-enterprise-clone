interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="flex h-full min-h-[170px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 text-center transition-all duration-300 ease-in-out hover:shadow-xl  hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
      <span className="text-3xl font-bold text-blue-600 md:text-4xl">
        {value}
      </span>

      <span className="mt-3 text-sm font-medium text-gray-600 md:text-base">
        {label}
      </span>
    </div>
  );
}