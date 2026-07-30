type PrimaryButtonProps = {
  text: string;
};

export function PrimaryButton({
  text,
}: PrimaryButtonProps) {
  return (
    <button className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
      {text}
    </button>
  );
}