export function Thank() {
  return (
    <article className="flex flex-col items-center justify-center gap-4 bg-blue-100 p-8 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold">Thank for something</h1>

      <textarea className="w-full" placeholder="Your message"></textarea>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        I wanna thank for that today
      </button>
    </article>
  );
}
