import { HeadlineIcon, ImageIcon, TextAlignLeftIcon } from "@/components";
import { cn } from "@/common/utils"

interface Props extends React.ComponentProps<'div'> {
  type: BlockType;
}

export const Block = ({
  type,
  children,
  className,
  ...props
}: Props) => {
  const composeBlockData = () => {
    const data = { icon: <></>, label: "" };

    switch(type) {
      case 'headline':
        data.icon = <HeadlineIcon />;
        data.label = 'Headline';
        break;
      case 'paragraph':
        data.icon = <TextAlignLeftIcon />;
        data.label = 'Paragraph';
        break;
      case 'image':
        data.icon = <ImageIcon />;
        data.label = 'Image';
        break;
      case 'button':
        data.icon = <ImageIcon />;
        data.label = 'Button';
        break;
      default:
        return data;
    }

    return data;
  }

  const { icon, label } = composeBlockData();

  return (
    <div className={cn("relative min-w-100 w-full px-10 py-15 rounded-md cursor-pointer bg-white", className)} {...props}>
      <div className="flex flex-col items-center gap-10">
        {icon}
        <p className="text-custom-body-02 text-dark-grey">{label}</p>
        {children}
      </div>
    </div>
  )
}
