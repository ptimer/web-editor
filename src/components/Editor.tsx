import { getDefaultBlockData, sortBlocksByOrder } from "@/common/utils";
import { Droppable, EditableBlock } from "@/components";
import { addBlock, selectAllBlocks } from "@/store/features/blocks";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export const Editor = () => {
  const dispatch = useDispatch();
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);

  const blocks = useSelector(selectAllBlocks);

  const handleAddBlock = (type: BlockType) => {
    const defaultBlockData = getDefaultBlockData(type);
    dispatch(addBlock(defaultBlockData));
  };

  return (
    <Droppable<BlockData>
      type="BLOCK"
      onDrop={(item) => handleAddBlock(item.type)}
      className="bg-grey-lightest px-30 py-20 w-538 flex flex-col gap-15"
    >
        {sortBlocksByOrder(blocks).map(block => (
            <EditableBlock
              key={block.id}
              data={block}
              editMode={selectedBlockId === block.id}
              onClick={() => setSelectedBlockId(block.id)}
            />
        ))}
    </Droppable> 
  )
}
