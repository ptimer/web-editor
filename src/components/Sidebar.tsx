import { mockBlocks } from "@/common/constants";
import { Block } from "@/components";
import { addBlock } from "@/store/features/editorSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleAdd = (type: BlockType) => {
    const newBlock = {
      id: uuidv4(),
      type,
      ...(type === "image" ? { url: "https://media.istockphoto.com/id/1399246824/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D1%96-%D0%BB%D1%96%D0%BD%D1%96%D1%97-%D1%85%D0%B2%D0%B8%D0%BB%D1%8C-%D0%BE%D1%87%D0%B5%D0%B9-%D1%81%D1%82%D0%BE%D0%BA%D0%BE%D0%B2%D0%B8%D0%B9-%D1%84%D0%BE%D0%BD.jpg?s=2048x2048&w=is&k=20&c=iXYM50PebeJ5hBfhKleK_xL-gDDMbMVxNG1C6VO4984=" } :
        type === "headline" ? { content: "New Headline" } :
        type === "paragraph" ? { content: "New paragraph..." } :
        { text: "Click me", alt: "Image" }),
    } as BlockData;

    dispatch(addBlock(newBlock));
  };

  return (
    <div className="grid grid-cols-2 auto-rows-min w-270 gap-10 p-30 border-r-1 border-[#E4E6F1]">
        {mockBlocks.map(block => (
          <Block
            key={block.type}
            type={block.type}
            onClick={() => handleAdd(block.type)}
            className="bg-blue-lightest"
          />
        ))}
    </div>
  )
}
