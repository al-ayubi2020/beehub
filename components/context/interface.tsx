import { Dispatch, ReactNode, SetStateAction } from "react";

export interface UserContextValue {
  user: any;
  token: string;
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  error: string;
  login: (identifier: any, password: any) => Promise<void>;
  register: (
    username: any,
    email: any,
    password: any,
    customRole: any,
    fullname: any
  ) => Promise<void>;
  logoutUser: () => void;
}

export interface ContextProviderProps {
  children: ReactNode;
}
