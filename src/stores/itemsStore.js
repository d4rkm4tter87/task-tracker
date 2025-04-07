import { create } from "zustand";
import { initialItems } from "../lib/constants";

create((set) => ({
  item: initialItems,
  removeAllItems: () => {
    set(() => ({ items: [] }));
  },
  resetToInitial: () => {
    set(() => ({ items: initialItems }));
  },
}));
