import spinner_dark from "@/assets/svg/spinner.svg";
import spinner_lite from "@/assets/svg/spinner_lt.svg";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function Loader({ className, text, imgClass }) {
  const { theme } = useTheme();

  return (
    <div
      className={cn("w-full h-44 flex items-center justify-center", className)}
    >
      <div className="flex space-x-2">
        <img
          src={theme === "light" ? spinner_dark : spinner_lite}
          alt=""
          className={cn("text-white", imgClass)}
        />
        <span>{text ?? "Loading..."}</span>
      </div>
    </div>
  );
}
