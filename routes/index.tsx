/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
        <a href='/about'>About</a>
        <br/>
        <a href='/search'>Search</a>
        <br/>
        <a href='/github/sullivantobias'>github/sullivantobias</a>
    </div>
  );
}
