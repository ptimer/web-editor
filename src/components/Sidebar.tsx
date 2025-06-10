import { Element, HeadlineIcon, ImageIcon, TextAlignLeftIcon } from "@/components";

const els: ElementProps[] = [
  { type: 'headline', label: 'Headline', icon: <HeadlineIcon /> },
  { type: 'paragraph', label: 'Paragraph', icon: <TextAlignLeftIcon /> },
  { type: 'button', label: 'Button', icon: <ImageIcon /> },
  { type: 'image', label: 'Image', icon: <ImageIcon /> },
]

export const Sidebar = () => {
  return (
    <div className="grid grid-cols-2 auto-rows-min w-270 gap-10 p-30 border-r-1 border-[#E4E6F1]">
        {els.map(block => (
          <Element
            key={block.type}
            className="bg-blue-lightest"
            {...block}
          />
        ))}
    </div>
  )
}
