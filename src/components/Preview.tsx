import { MockBlocks } from "@/common/constants"
import { Button } from "@/components"

const sortByOrder = (a: BlockData, b: BlockData) => a.order - b.order;

export const Preview = () => {
  const renderBlock = (block: BlockData) => {
    switch(block.type) {
      case 'headline':
        return <h1 className="text-custom-heading-01 text-dark-grey">{block.content}</h1>
      case 'paragraph':
        return <p className="text-custom-body-01 text-blue-grey text-center">{block.content}</p>
      case 'button':
        return <Button>{block.text}</Button>
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
        {MockBlocks.sort(sortByOrder).map(block => renderBlock(block))}
    </div>
  )
}
