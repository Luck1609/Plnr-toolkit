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
      <Tooltip className="flex justify-start YO-FISH">
        <TooltipTrigger asChild>
          <Button className="!justify-start dark:text-white">{label}</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{value}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}


ToolTips.propTypes = {
  label: propTypes.any,
  value: propTypes.any
}