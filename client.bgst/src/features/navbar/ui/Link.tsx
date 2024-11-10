import { Link } from "react-router-dom";

export const BgstLink = ({ title, url }: { title: string; url: string }) => {
  return (
    <Link
      to={`${url}`}
      className="text-darkness-200 hover:text-darkness-50 hover:bg-darkness-600 px-3 py-2 rounded-md text-sm font-medium"
    >
      {title}
    </Link>
  );
};
