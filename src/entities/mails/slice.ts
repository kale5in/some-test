import { StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Mail = {
  id: string;
  text: string;
};

interface MailsSlice {
  mails: Mail[];
  getMailsCount: () => number;
  addMail: (letter: Mail) => void;
  removeMail: (id: string) => void;
}

const createMailsSlice: StateCreator<MailsSlice> = (set, get) => ({
  mails: [],

  getMailsCount: () => get().mails.length,

  addMail: (mail) =>
    set((state) => ({
      mails: [...state.mails, mail],
    })),

  removeMail: (id) =>
    set((state) => ({
      mails: state.mails.filter((mail) => mail.id !== id),
    })),
});

const createPersistedMailsSlice = persist(createMailsSlice, {
  name: "mails-storage",
  version: 0,
  storage: createJSONStorage(() => localStorage),
});

export { createPersistedMailsSlice };
