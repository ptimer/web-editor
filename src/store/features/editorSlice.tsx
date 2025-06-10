import { mockBlocks } from "@/common/constants";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface EditorState {
  blocks: BlockData[];
  selectedBlockId: string | null;
}

const initialState: EditorState = {
  blocks: mockBlocks,
  selectedBlockId: null,
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    addBlock(state, action: PayloadAction<Omit<BlockData, "order">>) {
      const maxOrder = state.blocks.length > 0 ? Math.max(...state.blocks.map(b => b.order)) : 0;
      // TODO: fix type warning
      //@ts-ignore
      state.blocks.push({ ...action.payload, order: maxOrder + 1 });
    },
    updateBlock(state, action: PayloadAction<BlockData>) {
      const idx = state.blocks.findIndex(b => b.id === action.payload.id);
      if (idx !== -1) {
        state.blocks[idx] = action.payload;
      }
    },
    deleteBlock(state, action: PayloadAction<string>) {
      state.blocks = state.blocks.filter(b => b.id !== action.payload);
    },
    moveBlockUp(state, action: PayloadAction<string>) {
      const current = state.blocks.find(b => b.id === action.payload);
      if (!current) return;
      const above = [...state.blocks]
        .filter(b => b.order < current.order)
        .sort((a, b) => b.order - a.order)[0];
      if (above) {
        const temp = current.order;
        current.order = above.order;
        above.order = temp;
      }
    },
    moveBlockDown(state, action: PayloadAction<string>) {
      const current = state.blocks.find(b => b.id === action.payload);
      if (!current) return;
      const below = [...state.blocks]
        .filter(b => b.order > current.order)
        .sort((a, b) => a.order - b.order)[0];
      if (below) {
        const temp = current.order;
        current.order = below.order;
        below.order = temp;
      }
    },
    selectBlock(state, action: PayloadAction<string | null>) {
      state.selectedBlockId = action.payload;
    },
  },
});

export const {
  addBlock,
  updateBlock,
  deleteBlock,
  moveBlockUp,
  moveBlockDown,
  selectBlock,
} = editorSlice.actions;

export default editorSlice.reducer;
