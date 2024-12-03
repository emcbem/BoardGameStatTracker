import { Link, useLocation } from "react-router-dom";

export const BgstLink = ({ title, url }: { title: string; url: string }) => {
  const location = useLocation();
  const currentlyHere = location.pathname.includes(url)
  return (
    <Link
      to={`${url}`}
      className={`text-darkness-200 transition-all hover:text-darkness-50 hover:bg-darkness-600 px-3 py-2 rounded-md text-sm font-medium ${currentlyHere ? "underline" : ""}`}
    >
      {title}
    </Link>
  );
};
