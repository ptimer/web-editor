import { sortBlocksByOrder } from "@/common/utils";
import { EditableBlock } from "@/components";
import { selectAllBlocks } from "@/store/features/blocks";
import { useState } from "react";
import { useSelector } from "react-redux";
export const Editor = () => {
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);

  const blocks = useSelector(selectAllBlocks);

  return (
    <div className="bg-grey-lightest px-30 py-20 w-538 flex flex-col gap-15">
        {sortBlocksByOrder(blocks).map(block => (
          <EditableBlock
            key={block.id}
            data={block}
            editMode={selectedBlockId === block.id}
            onClick={() => setSelectedBlockId(block.id)}
          />
        ))}
    </div>
  )
}
