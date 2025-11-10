export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative lg:flex lg:flex-col col-12 lg:justify-between w-full px-1">
      {children}
    </div>
  );
}
