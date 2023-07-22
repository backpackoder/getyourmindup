type PlaylistPageProps = {
  id: string;
};

export async function PlaylistPage({ id }: PlaylistPageProps) {
  return (
    <section>
      <iframe
        src={`https://open.spotify.com/embed/playlist/${id}`}
        width="300"
        height="380"
        allow="encrypted-media"
      ></iframe>
    </section>
  );
}
