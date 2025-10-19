"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// TODO: set this up to sanity cms and have it dynamically fetch the projects

const frameworks = [
  {
    value: "animated-counter",
    label: "Animated Counter",
  },
  {
    value: "horizontal-section",
    label: "Horizontal Section",
  },
  {
    value: "cursor-blend",
    label: "Cursor Blend",
  },
  {
    value: "flashlight-gradient",
    label: "Flashlight Gradient",
  },
  {
    value: "particle-distorter",
    label: "Particle Distorter",
  },
];

export function Combobox({ setProject }: any) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Get current project from URL path
  const currentProject = pathname?.split("/")[1] || "";

  // Set initial value based on current URL
  const [value, setValue] = React.useState(() => {
    const projectExists = frameworks.find(
      (framework) => framework.value === currentProject
    );
    return projectExists ? currentProject : "";
  });

  // Update value when pathname changes
  React.useEffect(() => {
    const projectExists = frameworks.find(
      (framework) => framework.value === currentProject
    );
    setValue(projectExists ? currentProject : "");
  }, [currentProject]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          //   onClick={() => handleClick()}
          className='w-[200px] text-white bg-transparent justify-between'
        >
          {value
            ? frameworks.find(
                (framework) => framework.value === value
              )?.label
            : "Select project..."}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput
            placeholder='Search projects...'
            className='border-none'
          />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(
                    currentValue === value ? "" : currentValue
                  );
                  setOpen(false);
                  router.push("/" + currentValue);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
