import { cn } from "@/common/utils"

export const Button = ({ className, children, ...props }: React.ComponentProps<"button">) => {
  return (
    <button
      className={cn("cursor-pointer rounded-sm bg-primary-blue px-30 py-10 text-custom-btn text-blue-lightest", className)}
      {...props}
    >
        { children }
    </button>
  )
}