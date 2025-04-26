import { StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Mail = {
  id: string;
  text: string;
};

interface MailsSlice {
  mails: Mail[];
  createdMailCount: number;
  addMail: (letter: Mail) => void;
  removeMail: (id: string) => void;
}

const createMailsSlice: StateCreator<MailsSlice> = (set) => ({
  mails: [],

  createdMailCount: 0,

  addMail: (mail) =>
    set((state) => ({
      mails: [...state.mails, mail],
      createdMailCount: state.createdMailCount + 1,
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
