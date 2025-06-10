import { MockBlocks } from "@/common/constants";
import { Block } from "@/components";

export const Sidebar = () => {
  return (
    <div className="grid grid-cols-2 auto-rows-min w-270 gap-10 p-30 border-r-1 border-[#E4E6F1]">
        {MockBlocks.map(block => (
          <Block
            key={block.type}
            className="bg-blue-lightest"
            data={block}
          />
        ))}
    </div>
  )
}
