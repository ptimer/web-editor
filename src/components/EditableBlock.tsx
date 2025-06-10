import { cn } from "@/common/utils";
import { Block, Input, EditableBlockToolbar } from "@/components";
import React, { useState } from "react";

interface Props extends React.ComponentProps<'div'> {
  data: BlockData;
}

export const EditableBlock = ({ data, ...props }: Props) => {
    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => setEditMode(prev => !prev);
    
    const composeSettings = () => {
        switch(data.type) {
            case 'headline':
                return <Input type="text" placeholder="Enter headline" />
            case 'paragraph':
                return <Input type="text" placeholder="Enter paragraph" />
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
            data={data}
            className={cn({ "bg-[#D9E7FF]": editMode })}
            onClick={toggleEditMode}
        >
            {editMode && (
                <>
                    <div className="absolute -top-27 right-10 z-50">
                        <EditableBlockToolbar />
                    </div>
                    <div className="p-5 rounded-xs bg-white w-full" onClick={(e) => e.stopPropagation()}>
                        {composeSettings()}
                    </div>
                </>
            )}
        </Block>
  )
}
