import { cn } from "@/common/utils"
export const Input = ({ className, type, ...props }: React.ComponentProps<"input">) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn("w-full rounded-xs border-1 border-[#E4E6F1] px-5 py-5.5 text-dark-grey bg-white", className)}
      {...props}
    />
  )
}
