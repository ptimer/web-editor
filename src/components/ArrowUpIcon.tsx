import { cn } from "@/common/utils"

export const ArrowUpIcon = ({ className, ...props}: React.ComponentProps<"svg">) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" className={cn("rotate-180", className)} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.875 11.6162V1.24999H8.125V11.6162L12.0581 7.68312L12.9419 8.56687L7.5 14.0087L2.05813 8.56687L2.94188 7.68312L6.875 11.6162Z" fill="white"/>
    </svg>
  )
}
