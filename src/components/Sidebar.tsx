import { mockBlocks } from "@/common/constants";
import { Block, Draggable } from "@/components";
import { addBlock } from "@/store/features/blocks";
import { useDispatch } from "react-redux";

export const Sidebar = () => {
  const dispatch = useDispatch();

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
    <div className="grid grid-cols-2 auto-rows-min w-270 gap-10 p-30 border-r-1 border-[#E4E6F1]">
        {mockBlocks.map(block => (
          <Draggable
            type="BLOCK"
            item={block}
          >
            <Block
              key={block.type}
              type={block.type}
              onClick={() => handleAddBlock(block.type)}
              className="bg-blue-lightest"
            />
          </Draggable>
        ))}
    </div>
  )
}
