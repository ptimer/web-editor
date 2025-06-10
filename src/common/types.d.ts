type BlockType = 'headline' | 'paragraph' | 'image' | 'button';

interface BaseBlock {
    id: string;
    type: BlockType;
    label: string;
    icon: JSX.Element;
    order: number;
}

interface HeadlineBlock extends BaseBlock {
    type: 'headline';
    content: string;
}

interface ParagraphBlock extends BaseBlock {
    type: 'paragraph';
    content: string;
}

interface ImageBlock extends BaseBlock {
    type: 'image';
    url: string;
}

interface ButtonBlock extends BaseBlock {
    type: 'button';
    text: string;
}

type BlockData =
    | HeadlineBlock
    | ParagraphBlock
    | ImageBlock
    | ButtonBlock;