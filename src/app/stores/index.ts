import { create } from "zustand";
import { createPersistedMailsSlice } from "@/entities/mails/slice";

type RootStore = ReturnType<typeof createPersistedMailsSlice>;

const useStore = create<RootStore>()((...a) => ({
  ...createPersistedMailsSlice(...a),
}));

export { useStore };
