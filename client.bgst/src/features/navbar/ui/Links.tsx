import LoginButton from "../../authentication/ui/login-button";
import { Link } from "./Link";

export const Links = () => {
  return (
    <>
      <Link title="Board Games" url="/boardgames" />
      <Link title="About Us" url="/aboutus" />
      <Link title="Contact" url="/contact" />
      <LoginButton></LoginButton>
    </>
  );
};
