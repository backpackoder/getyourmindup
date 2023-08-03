type PlaylistsWrapperProps = {
  type: string;
  title: string;
  children: JSX.Element;
};

export async function RelaxListsWrapper({ type, title, children }: PlaylistsWrapperProps) {
  return (
    <article className="flex flex-col justify-center gap-8">
      <h2 className="text-4xl">
        {type} about <span className="text-blue-800">{title}</span>
      </h2>

      <section className="flex flex-wrap justify-center gap-8">{children}</section>
    </article>
  );
}
