import { ArrowDownIcon, ArrowUpIcon, TrashIcon, CopyIcon } from "@/components";

interface Props {
  handleMoveUp: () => void;
  handleMoveDown: () => void;
  handleDelete: () => void;
  handleClone: () => void;
}

export const EditableBlockToolbar = ({ 
  handleMoveUp,
  handleMoveDown,
  handleDelete,
  handleClone,
}: Props) => {
  return (
    <div className="flex gap-5">
        <div className="bg-blue flex gap-5 p-3 rounded-t-[0.1875rem]">
          <div className="hover:bg-accent-cyan-dark p-3 rounded-sm" onClick={handleMoveDown}>
            <ArrowDownIcon className={"w-15 h-15"} />
          </div>
          <div className="hover:bg-accent-cyan-dark p-3 rounded-sm" onClick={handleMoveUp}>
            <ArrowUpIcon className={"w-15 h-15"} />
          </div>
        </div>
        <div className="bg-accent-cyan flex gap-5 p-3 rounded-t-[0.1875rem]">
          <div className="hover:bg-accent-cyan-dark p-3 rounded-sm" onClick={handleClone}>
            <CopyIcon className={"w-15 h-15"} />
          </div>
          <div className="hover:bg-accent-cyan-dark p-3 rounded-sm" onClick={handleDelete}>
            <TrashIcon className={"w-15 h-15"} />
          </div>
        </div>
    </div>
  )
}
