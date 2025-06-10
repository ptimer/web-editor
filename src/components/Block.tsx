import { cn } from "@/common/utils"
import type React from "react"

interface Props extends React.ComponentProps<'div'> {
  data: BlockData;
}

export const Block = ({
  data,
  children,
  className,
  ...props
}: Props) => {
  return (
    <div className={cn("relative min-w-100 w-full px-10 py-15 rounded-md cursor-pointer bg-white", className)} {...props}>
      <div className="flex flex-col items-center gap-10">
        {data.icon}
        <p className="text-custom-body-02 text-dark-grey">{data.label}</p>
        {children}
      </div>
    </div>
  )
}
