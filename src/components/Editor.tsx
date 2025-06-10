import { EditableBlock } from "@/components";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
export const Editor = () => {
  const blocks = useSelector((state: RootState) =>
    [...state.editor.blocks].sort((a, b) => a.order - b.order)
  );

  return (
    <div className="bg-grey-lightest px-30 py-20 w-538 flex flex-col gap-15">
        {blocks.map(block => (
          <EditableBlock
            key={block.id}
            data={block}
          />
        ))}
    </div>
  )
}
