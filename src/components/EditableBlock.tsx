import { cn } from "@/common/utils";
import { Block, Input, EditableBlockToolbar, Textarea } from "@/components";
import { deleteBlock, moveBlockDown, moveBlockUp } from "@/store/features/blocks";
import { useDispatch } from "react-redux";

interface Props extends React.ComponentProps<'div'> {
  data: BlockData;
  editMode: boolean;
}

export const EditableBlock = ({ data, editMode, ...props }: Props) => {
    const dispatch = useDispatch();
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

    const handleClickMoveUp = () => dispatch(moveBlockUp(data.id));
    const handleClickMoveDown = () => dispatch(moveBlockDown(data.id));
    const handleClickDelete = () => dispatch(deleteBlock(data.id));
    const handleClickCopy = () => {};

    const handleClickSettings = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();
  
    return (
        <Block
            type={data.type}
            className={cn({ "bg-[#D9E7FF]": editMode })}
            {...props}
        >
            {editMode && (
                <>
                    <div className="absolute -top-27 right-10 z-50">
                        <EditableBlockToolbar 
                            handleMoveUp={handleClickMoveUp}
                            handleMoveDown={handleClickMoveDown}
                            handleDelete={handleClickDelete}
                            handleCopy={handleClickCopy}
                        />
                    </div>
                    <div className="p-5 rounded-xs bg-white w-full" onClick={handleClickSettings}>
                        {composeSettings()}
                    </div>
                </>
            )}
        </Block>
  )
}
