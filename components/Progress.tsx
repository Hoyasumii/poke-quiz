type Props = {
  value: number;
  total: number;
};

export function Progress({ value, total }: Props) {
  return (
    <div className="w-full h-2 rounded-full overflow-hidden bg-blue-100">
      <div
        className="duration-300 transition-all h-2 rounded-full bg-blue-700"
        style={{ width: `${(value * 100) / total}%` }}
      />
    </div>
  );
}
