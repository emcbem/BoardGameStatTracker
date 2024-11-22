
export const LoadingScreen = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-[200px] h-[200px] relative">
        <div className="w-full h-full rounded-full border-4 border-dashed border-bgst-500 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-semibold text-bgst-500">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
};
