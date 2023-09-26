import { createContext, useContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export type User = {
  id: string;
  name: string;
  birth?: string;
  loc?: string;
  sex?: "Male" | "Female" | "Other";
} | null;

export const UserContext = createContext<User>(null);
export const SetUserContext = createContext<
  Dispatch<SetStateAction<User>> | undefined
>(undefined);

export function useUser(): [User, Dispatch<SetStateAction<User>>] {
  const user = useContext(UserContext);
  const setUser = useContext(SetUserContext);
  if (!setUser) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return [user, setUser];
}
