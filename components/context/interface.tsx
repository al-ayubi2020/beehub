import { Dispatch, ReactNode, SetStateAction } from "react";

export interface UserContextValue {
  user: any;
  username: string;
  token: string;
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  error: string;
  postComment: (comment: any, postId: any) => Promise<void>;
  deleteComment: (commenttId: any) => Promise<void>;
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
