import { sortBlocksByOrder } from "@/common/utils";
import { Droppable, EditableBlock } from "@/components";
import { addBlock, selectAllBlocks } from "@/store/features/blocks";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export const Editor = () => {
  const dispatch = useDispatch();
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);

  const blocks = useSelector(selectAllBlocks);

  const handleAddBlock = (type: BlockType) => {
    const composeDefaultBlockData = () => {
      switch(type) {
        case 'headline':
          return { content: "New Headline" }
        case 'paragraph':
          return { content: "New paragraph..." }
        case 'image':
          return { alt: "Image", url: "https://media.istockphoto.com/id/1399246824/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D1%96-%D0%BB%D1%96%D0%BD%D1%96%D1%97-%D1%85%D0%B2%D0%B8%D0%BB%D1%8C-%D0%BE%D1%87%D0%B5%D0%B9-%D1%81%D1%82%D0%BE%D0%BA%D0%BE%D0%B2%D0%B8%D0%B9-%D1%84%D0%BE%D0%BD.jpg?s=2048x2048&w=is&k=20&c=iXYM50PebeJ5hBfhKleK_xL-gDDMbMVxNG1C6VO4984=" }
        case 'button':
          return { content: "Click me" }
        default:
          return null
      }
    }
  
    const newBlock = {
      type,
      ...composeDefaultBlockData(),
    } as BlockData;
  
    dispatch(addBlock(newBlock));
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
