import type { ReactNode } from "react";
import { useDrop, type DropTargetMonitor } from "react-dnd";

interface DroppableProps<T> {
  type: string;
  canDrop?: (item: T) => boolean;
  onDrop?: (item: T) => void;
  onHover?: (item: T) => void;
  children: ReactNode;
  className?: string;
}

export const Droppable = <T extends object>({
  type,
  canDrop,
  onDrop,
  onHover,
  children,
  className,
}: DroppableProps<T>) => {
  const [{ isOver, canDrop: dropAllowed }, dropRef] = useDrop<T>({
    accept: type,
    drop: (draggedItem, monitor: DropTargetMonitor) => {
      if (onDrop && monitor.didDrop() === false) {
        onDrop(draggedItem);
      }
    },
    hover: (hoveredItem) => {
      onHover?.(hoveredItem);
    },
    canDrop: (draggedItem) => {
      return canDrop ? canDrop(draggedItem) : true;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={dropRef}
      className={`${className ?? ""} ${isOver && dropAllowed ? "ring-2 ring-blue-500" : ""}`}
    >
      {children}
    </div>
  );
};
