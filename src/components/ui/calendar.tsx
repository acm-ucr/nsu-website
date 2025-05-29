"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      formatters={{
        formatWeekdayName: (weekday) =>
          weekday.toLocaleString("en-US", { weekday: "long" }).toUpperCase(),
      }}
      className={cn("w-full m-auto xl:w-[80%] p-[2.55%]", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2 w-full",
        month:
          "w-full flex flex-col gap-8 bg-nsu-red-200 text-white border-6 md:border-8 lg:border-12 border-black",
        caption:
          "flex justify-center relative items-center w-full pb-2 lg:pb-18",
        caption_label:
          "order-2 text-2xl md:text-5xl lg:text-6xl xl:text-8xl font-bold bg-black p-4 rounded-3xl -mt-[5%] drop-shadow-lg",
        nav: "flex items-center gap-4",
        nav_button: cn(
          buttonVariants({ variant: "ghost" }),
          "size-12 lg:size-28 p-auto hover:bg-nsu-red-100",
        ),
        nav_button_previous: "absolute left-1 top-1",
        nav_button_next: "absolute right-1 top-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-full font-normal text-[0.5rem] md:text-lg lg:text-2xl xl:text-3xl text-white ",
        row: "flex w-full justify-center",
        cell: cn(
          "relative p-auto text-center text-sm hover:bg-nsu-red-100 focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md w-full bg-nsu-red-200 rounded-sm lg:rounded-2xl border-1 md:2 lg:border-3 border-black aspect-square shadow-[inset_0_0_16px_rgba(0,0,0,0.5)]",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md",
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-1 lg:size-4 lg:size-12 left-0.5 top-0.5 absolute p-3 md:p-4 lg:p-5 xl:p-7 md:left-1 md:top-2 lg:left-2 lg:top-2 font-normal text-xs md:text-xl lg:text-2xl xl:text-4xl aria-selected:opacity-100",
        ),
        day_range_start:
          "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end:
          "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:bg-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-black text-white text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("size-4 md:size-8 lg:size-10", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("size-4 md:size-8 lg:size-10", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
