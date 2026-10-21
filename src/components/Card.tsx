interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`rounded-2xl border-2 border-edge bg-card shadow-hard ${className}`}
    >
      {children}
    </div>
  );
}
