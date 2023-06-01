import React, { createContext, useEffect } from "react";
import { AuthModel } from "../../../domain/models";
import { AuthUseCase } from "../../../domain/use-cases";
import { authAdapter } from "../../../main/adapters";
import { makeLocalStorageAdapter } from "../../../main/adapters/local-storage-adapter";

type AuthContextProps = {
  signIn: (credentials: AuthUseCase.Params) => Promise<void>;
  signOut: () => void;
  auth: AuthModel;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

const storage = makeLocalStorageAdapter();

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [auth, setAuth] = React.useState<AuthModel>({} as AuthModel);

  useEffect(() => {
    const storedAccount = storage.get("account");
    if (storedAccount) {
      const account: AuthModel = JSON.parse(storedAccount);
      if (account.accessToken) {
        setAuth(account);
      } else {
        storage.remove("account");
        setAuth({} as AuthModel);
      }
    }
  }, []);

  const signIn = async (credentials: AuthUseCase.Params) => {
    const response = await authAdapter(credentials);
    if (!response.accessToken) {
      return;
    }
    storage.set("account", response);
    setAuth(response);
  };

  const signOut = () => {
    setAuth({} as AuthModel);
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, auth }}>
      {children}
    </AuthContext.Provider>
  );
};
