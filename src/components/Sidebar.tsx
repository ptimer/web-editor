import { mockBlocks } from "@/common/constants";
import { getDefaultBlockData } from "@/common/utils";
import { Block, Draggable } from "@/components";
import { addBlock } from "@/store/features/blocks";
import { useDispatch } from "react-redux";

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleAddBlock = (type: BlockType) => {
    const defaultBlockData = getDefaultBlockData(type);
    dispatch(addBlock(defaultBlockData));
  };

  return (
    <div className="grid grid-cols-2 auto-rows-min w-270 gap-10 p-30 border-r-1 border-[#E4E6F1]">
        {mockBlocks.map(block => (
          <Draggable
            type="BLOCK"
            item={block}
            key={block.type}
          >
            <Block
              type={block.type}
              onClick={() => handleAddBlock(block.type)}
              className="bg-blue-lightest"
            />
          </Draggable>
        ))}
    </div>
  )
}
