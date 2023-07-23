type RelaxItemProps = {
  title: string;
  children: JSX.Element;
};

export function RelaxItem({ title, children }: RelaxItemProps) {
  return (
    <section className="flex flex-col justify-center gap-4 bg-blue-100 p-4 rounded-lg shadow-xl">
      <h2 className="text-5xl font-semibold">{title}</h2>

      {children}
    </section>
  );
}
