import { create } from "zustand";
import { BaseStoreTypes } from "../../types";

const useBaseStore = create<BaseStoreTypes>()((set) => ({
  isSidebarShow: false,
  isShowSubMenu: "",

  setIsSidebarShowSubMenu: (value) => set({ isShowSubMenu: value }),
  setIsSidebarShow: (value) => set({ isSidebarShow: value }),
}));

export default useBaseStore;
