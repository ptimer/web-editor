import { mockBlocks } from "@/common/constants";
import { createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const blocksAdapter = createEntityAdapter<BlockData>({
  sortComparer: (a, b) => a.order - b.order,
});

let initialState = blocksAdapter.getInitialState();

initialState = blocksAdapter.setAll(initialState, mockBlocks);

const blocksSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    addBlock: (state, action: PayloadAction<Omit<BlockData, "order">>) => {
      const maxOrder =
        Object.values(state.entities).reduce(
          (max, b) => (b && b.order > max ? b.order : max),
          0
        ) + 1;
      blocksAdapter.addOne(state, { ...action.payload, order: maxOrder });
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
        const temp = current.order;
        current.order = above.order;
        above.order = temp;
      }
    },
    moveBlockDown: (state, action: PayloadAction<string>) => {
      const current = state.entities[action.payload];
      if (!current) return;
      const below = Object.values(state.entities)
        .filter((b) => b && b.order > current.order)
        .sort((a, b) => a!.order - b!.order)[0];
      if (below) {
        const temp = current.order;
        current.order = below.order;
        below.order = temp;
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
