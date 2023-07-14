"use client";

import { useState } from "react";

export function GoodActionOfTheDay() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <article className="flex flex-col items-center justify-center gap-4 bg-blue-100 p-8 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold">Good action of the day</h1>

      <p className="text-2xl">Make a new friend</p>

      {isClicked ? (
        <Comment setIsClicked={setIsClicked} />
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsClicked(true)}
        >
          I did it!
        </button>
      )}
    </article>
  );
}

type CommentProps = {
  setIsClicked: (value: boolean) => void;
};

function Comment({ setIsClicked }: CommentProps) {
  return (
    <div>
      <h3>Explain us how you did it and how you felt doing so</h3>

      <textarea className="w-full" placeholder="Your message"></textarea>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <button
          className="bg-red-200 duration-150 hover:bg-red-400 p-2 rounded-lg"
          onClick={() => setIsClicked(false)}
        >
          Cancel
        </button>
        <button
          className="bg-green-200 duration-150 hover:bg-green-400 p-2 rounded-lg"
          onClick={() => {}}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
