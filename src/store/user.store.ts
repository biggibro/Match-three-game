import { create } from 'zustand';

export type UserDTO = {
  id: number;
  name: string;
  level: 'eazy' | 'hard';
};

type UserStore = {
  user: UserDTO | null;
};

interface UserActions {
  getUser: () => UserDTO | null;
  addUser: (user: UserDTO) => void;
}

const initialState: UserStore = {
  user: null,
};

export const useUserStore = create<UserStore & UserActions>((set, get) => ({
  ...initialState,

  getUser: () => get().user,

  addUser: (user) => set({ user }),
}));
