import { Ghost } from "../../friends/ui/Ghost";

export const EmptyContent = ({content}: {content: string}) => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-center flex-col  bg-swhite-300 rounded-2xl pt-2 pb-4 px-3 w-fit">
        <div className="w-[200px] h-[200px] mb-3">
          <Ghost />
        </div>
        <p className="text-center font-light text-swhite-800 ">
          {content}
        </p>
      </div>
    </div>
  );
};
