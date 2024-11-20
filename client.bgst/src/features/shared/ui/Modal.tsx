import { ModalController } from "../types/ModalController";

export const Modal = ({ controller }: { controller: ModalController }) => {
  if (!controller.open) {
    return <></>;
  }

  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen bg-darkness-800/75 flex items-center justify-center transition-opacity duration-1000"
      onClick={() => controller.setOpen(false)}
    >
      <div
        className=" relative sm:w-1/2 h-fit w-full mx-2 rounded-xl bg-darkness-50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col m-3 ms-4">
          <p className="text-3xl text-darkness-800">{controller.title}</p>
        </div>
        <hr className="border-darkness-100 border-1"></hr>
        <div className="ms-4 m-3">{controller.children}</div>
        <hr className="border-darkness-100 border-1"></hr>
        <div className="flex flex-row p-2">
            <div className="ml-auto mr-2 p-1 px-2 bg-green-800 underline text-green-50 rounded-md hover:bg-green-600 ">
                <button >
                    Submit
                </button>
            </div>
            <div className="p-1 hover:bg-red-50 text-red-800 rounded-md ">
                <button className="underline">
                    Cancel
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};
