import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <article className="mx-auto max-w-[68ch] px-4 py-16 sm:px-6">
      <h1 className="font-display text-[34px] font-medium">That page is not on this site.</h1>
      <p className="mt-4 text-[17px] leading-[28px]">
        <Link to="/">Go home</Link>
        {" · "}
        <Link to="/work">See the work</Link>
      </p>
    </article>
  );
}
