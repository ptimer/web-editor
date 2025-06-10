import { ArrowDownIcon, ArrowUpIcon, TrashIcon, CopyIcon } from "@/components";

export const EditableBlockToolbar = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div className="flex gap-5">
        <div className="bg-blue flex gap-5 p-3 rounded-t-[0.1875rem]">
          <div className="hover:bg-accent-cyan-dark p-3 rounded-sm">
            <ArrowDownIcon className={"w-15 h-15"} />
          </div>
          <div className="hover:bg-accent-cyan-dark p-3 rounded-sm">
            <ArrowUpIcon className={"w-15 h-15"} />
          </div>
        </div>
        <div className="bg-accent-cyan flex gap-5 p-3 rounded-t-[0.1875rem]">
          <div className="hover:bg-accent-cyan-dark p-3 rounded-sm">
            <CopyIcon className={"w-15 h-15"} />
          </div>
          <div className="hover:bg-accent-cyan-dark p-3 rounded-sm">
            <TrashIcon className={"w-15 h-15"} />
          </div>
        </div>
    </div>
  )
}
