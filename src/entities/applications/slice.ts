import { StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Application = {
  id: string;
  text: string;
};

interface ApplicationsSlice {
  applications: Application[];
  createdApplicationsCount: number;
  addApplication: (letter: Application) => void;
  removeApplication: (id: string) => void;
}

const createApplicationsSlice: StateCreator<ApplicationsSlice> = (set) => ({
  applications: [],

  createdApplicationsCount: 0,

  addApplication: (application) =>
    set((state) => ({
      applications: [...state.applications, application],
      createdApplicationsCount: state.createdApplicationsCount + 1,
    })),

  removeApplication: (id) =>
    set((state) => ({
      applications: state.applications.filter(
        (application) => application.id !== id
      ),
    })),
});

const createPersistedApplicationsSlice = persist(createApplicationsSlice, {
  name: "applications-storage",
  version: 0,
  storage: createJSONStorage(() => localStorage),
});

export { createPersistedApplicationsSlice };
