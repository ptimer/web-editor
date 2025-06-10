import { cn } from "@/common/utils";

export const Textarea = ({ className, ...props }: React.ComponentProps<"textarea">) => {
  return (
    <textarea
      className={cn("w-full rounded-xs border-1 border-[#E4E6F1] px-5 py-5.5 text-dark-grey bg-white", className)}
      {...props}
    />
  )
}
