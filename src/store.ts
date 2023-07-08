import create from "zustand";
import { persist } from "zustand/middleware";
import { FarmItemProps } from "./types";

interface User {
  uid: string;
  name: string;
  type: "customer" | "farmer";
}

interface Store {
  user: User | null;
  setUser: (val: User | null) => void;
  cartItems: FarmItemProps[];
  addItem: (item: FarmItemProps) => void;
  removeItem: (uid: string) => void;
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedItem: null | FarmItemProps;
  setSelectedItem: (item: FarmItemProps) => void;
}

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (val: User | null) => set({ user: val }),

      cartItems: [],
      addItem: (item: FarmItemProps) =>
        set({
          cartItems: [
            item,
            ...get().cartItems.filter((nitem) => nitem.uid != item.uid),
          ],
        }),
      removeItem: (uid: string) =>
        set({ cartItems: get().cartItems.filter((item) => item.uid != uid) }),
      searchQuery: "",
      setSearchQuery: (val: string) => set({ searchQuery: val }),
      selectedItem: null,
      setSelectedItem: (item: FarmItemProps) => set({ selectedItem: item }),
    }),
    { name: "main-storage" }
  )
);
