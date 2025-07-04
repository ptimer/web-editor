type BlockType = 'headline' | 'paragraph' | 'image' | 'button';

interface BaseBlock {
    id: string;
    type: BlockType;
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
    alt: string;
    url: string;
}

interface ButtonBlock extends BaseBlock {
    type: 'button';
    content: string;
}

type BlockData =
    | HeadlineBlock
    | ParagraphBlock
    | ImageBlock
    | ButtonBlock;
