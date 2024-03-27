import { cn } from "@/lib/utils";

export default function TableFilter({ setParams, className }) {
  const onChange = ({ target: { value } }) => {
    setParams((prev) => ({ ...prev, search: value }));
  };

  return (
    <>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={onChange}
        className={cn("p-2 rounded w-60", className)}
      />
    </>
  );
}
