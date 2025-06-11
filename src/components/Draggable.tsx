import type { ReactNode } from "react";
import { useDrag, type DragSourceMonitor } from "react-dnd";

// TODO: types
interface DraggableProps<T> {
  type: string;
  item: T;
  canDrag?: boolean;
  children: ReactNode;
  className?: string;
}

export const Draggable = <T extends object>({
  type,
  item,
  canDrag = true,
  children,
  className,
}: DraggableProps<T>) => {
  const [{ isDragging }, dragRef] = useDrag({
    type,
    item: () => item,
    canDrag,
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      //@ts-ignore
      ref={dragRef}
      className={`${className ?? ""} ${isDragging ? "opacity-50" : ""}`}
    >
      {children}
    </div>
  );
};
