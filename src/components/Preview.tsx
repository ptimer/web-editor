import { sortBlocksByOrder } from "@/common/utils";
import { Button } from "@/components"
import { selectAllBlocks } from "@/store/features/blocks";
import { useSelector } from "react-redux";

export const Preview = () => {
  const blocks = useSelector(selectAllBlocks);
  
  const renderBlock = (block: BlockData) => {
    switch(block.type) {
      case 'headline':
        return <h1 className="text-custom-heading-01 text-dark-grey">{block.content}</h1>
      case 'paragraph':
        return <p className="text-custom-body-01 text-blue-grey text-center">{block.content}</p>
      case 'button':
        return <Button>{block.content}</Button>
      case 'image':
        return (
          <div className="w-540">
            <img src={block.url} alt={block.alt} className="h-auto w-full rounded-sm" />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex-1 flex flex-col p-30 gap-30 items-center">
        {sortBlocksByOrder(blocks).map(block => <div key={block.id}>{renderBlock(block)}</div>)}
    </div>
  )
}
