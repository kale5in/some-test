import { create } from "zustand";
import { createPersistedApplicationsSlice } from "@/entities/applications/slice";

type RootStore = ReturnType<typeof createPersistedApplicationsSlice>;

const useStore = create<RootStore>()((...a) => ({
  ...createPersistedApplicationsSlice(...a),
}));

export { useStore };
