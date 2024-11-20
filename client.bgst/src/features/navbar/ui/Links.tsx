import { useUserContext } from "../../authentication/hooks/useUserContext";
import { BgstLink } from "./Link";

export const Links = () => {
  const user = useUserContext()
  return (
    <>
      <BgstLink title="Board Games" url="/boardgames" />
      <BgstLink title="About Us" url="/aboutus" />
      <BgstLink title="Contact" url="/contact" />
      {user?.user && <BgstLink title="Collection" url="/view-collection"/>}
      {user?.user && <BgstLink title="Friends" url="/view-friends"/>}
    </>
  );
};
