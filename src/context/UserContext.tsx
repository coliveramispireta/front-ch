'use client'
import { IFormFields } from "@/types/formHome.types";
import { User } from "@/types/user.types";
import { useRouter } from "next/navigation";
import { createContext, useState, ReactNode, useContext } from "react";


interface IUserContext {
  user: User | null;
  setUser: (user: User) => void;
  nextStep: () => void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const nextStep = () => {
    router.push('/quote/plans');
  };

  return (
    <UserContext.Provider value={{ user, setUser, nextStep }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
