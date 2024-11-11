import SideBySide from "../../shared/ui/SideBySide";

export const HomePage = () => {
  return (
    <SideBySide
      leftComponent={
        <img
          className="max-w-[500px] md:block hidden"
          src="https://m.media-amazon.com/images/I/71DOe17lbyL._AC_UF894,1000_QL80_.jpg"
        ></img>
      }
      rightComponent={<p>Welcome to Board Game Stat Tracker</p>}
    ></SideBySide>
  );
};
