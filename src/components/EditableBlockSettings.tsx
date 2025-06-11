import { updateBlock } from "@/store/features/blocks";
import debounce from "lodash.debounce";
import { useEffect, type JSX } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Textarea } from "./Textarea";
import { Input } from "./Input";

interface Props extends React.ComponentProps<"div"> {
  data: BlockData;
}

export const EditableBlockSettings = ({ data, ...props }: Props) => {
  const dispatch = useDispatch();

  const composeDefaultFormValues = () => {
    switch (data.type) {
      case "headline":
        return { content: data.content };
      case "paragraph":
        return { content: data.content };
      case "button":
        return { content: data.content };
      case "image":
        return { url: data.url, alt: data.alt };
      default:
        return {};
    }
  }
  const { register, watch } = useForm<BlockData>({
    defaultValues: composeDefaultFormValues()
  });

  const watchFormFieldsByBlockType = () => {
    switch (data.type) {
      case "headline":
      case "paragraph":
      case "button":
        return watch("content");
      case "image":
        return watch(["url", "alt"]);
      default:
        return null;
    }
  }

  const watched = watchFormFieldsByBlockType();

  const debouncedUpdate = debounce((changes: Partial<BlockData>) => {
    dispatch(updateBlock({ id: data.id, changes }));
  }, 100);

  useEffect(() => {
    if (!watched) return;

    switch (data.type) {
      case "headline":
      case "paragraph":
      case "button":
        debouncedUpdate({ content: watched as string });
        break;
      case "image":
        const [url, alt] = watched;
        debouncedUpdate({ url, alt });
        break;
    }
  }, [watched, data.type, debouncedUpdate]);


  // TODO: separate component ?
  const composedBlockSettingsFields: Record<BlockType, JSX.Element> = {
    headline: (
      <Input {...register("content")} placeholder="Enter headline" />
    ),
    paragraph: (
      <Textarea {...register("content")} placeholder="Enter paragraph" />
    ),
    button: (
      <Input {...register("content")} placeholder="Enter button text" />
    ),
    image: (
      <div className="flex flex-col gap-5">
        <label className="text-dark-grey text-custom-body-01" htmlFor="image-url">Image URL</label>
        <Input {...register("url")} placeholder="Enter image URL" id="image-url" />
        <label className="text-dark-grey text-custom-body-01" htmlFor="image-alt">Alt text</label>
        <Input {...register("alt")} placeholder="Enter alt text" id="image-alt" />
      </div>
    ),
  };

  return <div {...props}>{composedBlockSettingsFields[data.type]}</div>;
};
