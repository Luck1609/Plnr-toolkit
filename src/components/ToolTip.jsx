import propTypes from "prop-types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";

export default function ToolTips({ label, value }) {
  return (
    <TooltipProvider>
      <Tooltip className="">
        <TooltipTrigger asChild>
          <Button className="!justify-start dark:text-white">{value}</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}


ToolTips.propTypes = {
  label: propTypes.any,
  value: propTypes.any
}