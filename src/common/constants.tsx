import { HeadlineIcon, ImageIcon, TextAlignLeftIcon } from "@/components";

export const MockBlocks: BlockData[] = [
  { id: '1', order: 2, type: 'headline', label: 'Headline', icon: <HeadlineIcon />, content: 'A legendary cap set that feels like new' },
  { id: '2', order: 3, type: 'paragraph', label: 'Paragraph', icon: <TextAlignLeftIcon />, content: `
    Prompt your customer to revisit your store by showing them the products they left behind. Consider offering them a coupon code to close the deal.
Using the "Insert" panel on the right, drag and drop 
the Abandoned Cart element onto the page below.` },
  { id: '3', order: 4, type: 'button', label: 'Button', icon: <ImageIcon />, text: 'Register now' },
  { id: '4', order: 1, type: 'image', label: 'Image', icon: <ImageIcon />, url: 'https://images.unsplash.com/photo-1676567512299-e7e1e3f7f6f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
]