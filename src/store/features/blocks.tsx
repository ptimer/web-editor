import { createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { mockBlocks } from "@/common/constants";
import type { RootState } from "../store";
import { v4 as uuidv4 } from 'uuid';

const blocksAdapter = createEntityAdapter<BlockData>({
  sortComparer: (a, b) => a.order - b.order,
});

const initialState = blocksAdapter.setAll(
  blocksAdapter.getInitialState(),
  mockBlocks
);

const blocksSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    addBlock: (state, action: PayloadAction<Omit<BlockData, "order" | "id">>) => {
      const id = uuidv4();
      const maxOrder = Math.max(
        0,
        ...Object.values(state.entities)
          .filter(Boolean)
          .map((block) => block!.order)
      ) + 1;

      blocksAdapter.addOne(state, { id, ...action.payload, order: maxOrder });
    },

    updateBlock: blocksAdapter.updateOne,
    deleteBlock: blocksAdapter.removeOne,

    moveBlockUp: (state, action: PayloadAction<string>) => {
      const current = state.entities[action.payload];
      if (!current) return;

      const above = Object.values(state.entities)
        .filter((b) => b && b.order < current.order)
        .sort((a, b) => b!.order - a!.order)[0];

      if (above) {
        [current.order, above.order] = [above.order, current.order];
      }
    },

    moveBlockDown: (state, action: PayloadAction<string>) => {
      const current = state.entities[action.payload];
      if (!current) return;

      const below = Object.values(state.entities)
        .filter((b) => b && b.order > current.order)
        .sort((a, b) => a!.order - b!.order)[0];

      if (below) {
        [current.order, below.order] = [below.order, current.order];
      }
    },
  },
});

export const {
  addBlock,
  updateBlock,
  deleteBlock,
  moveBlockUp,
  moveBlockDown,
} = blocksSlice.actions;

export const {
  selectAll: selectAllBlocks,
} = blocksAdapter.getSelectors((state: RootState) => state.blocks);

export default blocksSlice.reducer;
