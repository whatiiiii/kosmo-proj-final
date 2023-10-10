import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import { SERVER_URL } from "./globals";

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

/**
 * React Query를 이용하여 아이디로 서버에서 유저 정보를 가져옵니다.
 * 아이디가 없으면 현재 로그인한 유저의 정보를 가져옵니다.
 * @param id 유저 아이디
 * @returns 유저 정보
 */
export function useServerUser(id?: string) {
  const [user] = useUser();
  if (!id) {
    if (!user) throw new Error("id must be provided if user is not logged in");
    id = user.id;
  }

  const result = useQuery({
    queryKey: ["user", id],
    queryFn: () =>
      fetch(`${SERVER_URL}/members/${id}`).then(
        (res) => res.json() as Promise<User>,
      ),
  });
  return result;
}
