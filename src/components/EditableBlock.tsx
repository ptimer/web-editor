import { cn } from "@/common/utils";
import { Block, Input, EditableBlockToolbar, Textarea } from "@/components";
import { deleteBlock, moveBlockDown, moveBlockUp, selectBlock } from "@/store/features/editorSlice";
import type { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props extends React.ComponentProps<'div'> {
  data: BlockData;
}

export const EditableBlock = ({ data, ...props }: Props) => {
    const selected = useSelector((state: RootState) => state.editor.selectedBlockId);
    const dispatch = useDispatch();

    const isEditMode = selected === data.id;

    // TODO: add palette, add image upload, add text align
    const composeSettings = () => {
        switch(data.type) {
            case 'headline':
                return <Input type="text" placeholder="Enter headline" />
            case 'paragraph':
                return <Textarea placeholder="Enter paragraph" />
            case 'button':
                return <Input type="text" placeholder="Enter button text" />
            case 'image':
                return <Input type="text" placeholder="Enter image url" />
            default:
                return null
        }
    }
  
    return (
        <Block
            type={data.type}
            className={cn({ "bg-[#D9E7FF]": isEditMode })}
            onClick={() => dispatch(selectBlock(data.id))}
        >
            {isEditMode && (
                <>
                    <div className="absolute -top-27 right-10 z-50">
                        <EditableBlockToolbar 
                            handleMoveUp={() => dispatch(moveBlockUp(data.id))}
                            handleMoveDown={() => dispatch(moveBlockDown(data.id))}
                            handleDelete={() => dispatch(deleteBlock(data.id))}
                            handleCopy={() => {}}
                        />
                    </div>
                    <div className="p-5 rounded-xs bg-white w-full" onClick={(e) => e.stopPropagation()}>
                        {composeSettings()}
                    </div>
                </>
            )}
        </Block>
  )
}
