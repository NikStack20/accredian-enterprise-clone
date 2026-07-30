type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div className="text-center">
      <div className="inline-block rounded-full bg-blue-100 px-4 py-2 font-bold text-blue-600">
        {value}
      </div>

      <p className="mt-4 text-sm text-gray-600">
        {label}
      </p>
    </div>
  );
}