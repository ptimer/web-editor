import { MockBlocks } from "@/common/constants";
import { EditableBlock } from "@/components";
export const Editor = () => {
  return (
    <div className="bg-grey-lightest px-30 py-20 w-538 flex flex-col gap-15">
        {MockBlocks.map(block => (
          <EditableBlock
            key={block.type}
            data={block}
          />
        ))}
    </div>
  )
}
