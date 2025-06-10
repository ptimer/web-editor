import { cn } from "@/common/utils"

export const Element = ({
  type,
  icon,
  label,
  className,
  ...props
}: ElementProps & React.ComponentProps<'div'>) => {
  return (
    <div className={cn("relative min-w-100 w-full px-10 py-15 rounded-[0.375rem] cursor-pointer", className)} {...props}>
      <div className="flex flex-col items-center gap-10">
        {icon}
        <p className="text-custom-body-02 text-dark-grey">{label}</p>
      </div>
    </div>
  )
}
