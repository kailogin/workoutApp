import React, { createContext, useState } from "react";
// import { AsyncStorage } from "react-native-community/async-storage";

type User = null | { username: string };

export const AuthContext = createContext<{
  user: User;
  login: () => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // --- STATE ---

  const [user, setUser] = useState<User>(null);

  // --- RENDER ---

  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const fakeUser = { username: "Bob" };

          setUser(fakeUser);
          //   AsyncStorage.setItem("user", JSON.stringify(fakeUser));
        },
        logout: () => {
          //   AsyncStorage.removeItem("user");
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
