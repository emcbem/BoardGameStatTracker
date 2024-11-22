import { DateController } from "../types/DateController";

export const DateInput = ({ controller }: { controller: DateController }) => {
  return (
    <>
      <p className="text-sm font-bold">{controller.title}</p>
      <input
        value={controller.date.toISOString().split("T")[0]} // Format to YYYY-MM-DD
        onChange={(e) => controller.setDate(new Date(e.target.value))} // Parse input correctly
        className="bg-swhite-50 outline shadow-md outline-darkness-50 rounded-sm h-full "
        type="date"
      />
    </>
  );
};
