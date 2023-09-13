'use client';
import React from 'react';

function Options() {
  type Joke = {
    setup: string;
    punchline: string;
  };
  const [joke, setJoke] = React.useState<Joke | null>(null);
  const [fetching, setFetching] = React.useState<boolean>(true);

  const getJoke = async () => {
    setFetching(true);
    try {
      const response = await fetch(
        'https://official-joke-api.appspot.com/random_joke'
      );
      const data = await response.json();
      setFetching(false);
      setJoke(data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-4">
      <h1 className="text-2xl font-semibold sm:text-4xl">Funny Bone 😂</h1>
      <h4 className="text-center text-lg sm:text-2xl">
        Bringing Laughter to Your Heart, One Joke at a Time, Just for You, My
        Love!❤️
      </h4>
      <div className="text-md flex h-40 w-full flex-col justify-center rounded-xl bg-blue-950 p-4 text-center text-white sm:text-lg">
        <p className="mb-2">{joke?.setup}</p>
        <p>{joke?.punchline}</p>
      </div>
      <button
        onClick={getJoke}
        className="rounded border border-white bg-white px-3 py-2 text-black  hover:bg-slate-200"
      >
        {fetching ? 'Fetching...' : 'Tell me a Joke'}
      </button>
    </div>
  );
}

export default Options;
