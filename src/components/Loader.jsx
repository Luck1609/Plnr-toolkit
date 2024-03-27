import spinner from "@/assets/svg/spinner.svg";
import { cn } from "@/lib/utils";

export default function Loader({ className, text, imgClass }) {
  return (
    <div className={cn("w-full h-44 flex items-center justify-center", className)}>
      <div className="flex space-x-2">
        <img src={spinner} alt="" className={cn("text-white", imgClass)} />
        <span>{text ?? "Loading..."}</span>
      </div>
    </div>
  );
}
