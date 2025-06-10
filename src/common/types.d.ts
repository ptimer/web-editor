type ElementType = 'headline' | 'paragraph' | 'image' | 'button';

interface ElementProps {
    type: ElementType;
    label: string;
    icon: React.ReactNode;
}