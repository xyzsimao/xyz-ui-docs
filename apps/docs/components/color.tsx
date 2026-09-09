"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
 
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip";
import cn from "cnfast";

export function Color({ name, shade, value }: { name: string; shade: string; value: string }) {
  let useShift = useShiftKey();
  let [copied, setCopied] = useState<"color" | "hex" | false>(false);

  let colorVariableName = `--color-${shade}-${value}`;
  // let hexValue = hexColors[name]?.[shade];

  function copyHexToClipboard(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    if (e.shiftKey) {
      // navigator.clipboard.writeText(hexColors[name][shade]);
      setCopied("hex");
    } else {
      navigator.clipboard.writeText(value);
      setCopied("color");
    }

    setTimeout(() => setCopied(false), 1300);
  }

  let tooltip: string;

  if (copied === "color") {
    tooltip = "Copied to clipboard!";
  } else if (copied === "hex") {
    tooltip = "Copied hex value!";
  } else if (useShift) {
    // tooltip = hexValue;
  } else {
    tooltip = value;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
		       <Button
        type="button"
        onClick={copyHexToClipboard}
        // style={{ backgroundColor: `var(${colorVariableName})` }}
        className={cn(
          `bg-${name}-${shade} aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10`,
        )}
      />
        </TooltipTrigger>
          <TooltipContent
						className="select-none rounded bg-white px-[15px] py-2.5 text-[15px] leading-none text-violet11 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
						sideOffset={5}
					>
						{value}
          </TooltipContent>
      </Tooltip>
    </TooltipProvider>

 
  );
}

function useShiftKey(): boolean {
  let [isShiftPressed, setIsShiftPressed] = useState(false);

  useEffect(() => {
    let handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Shift") {
        setIsShiftPressed(true);
      }
    };

    let handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Shift") {
        setIsShiftPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return isShiftPressed;
}