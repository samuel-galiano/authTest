import * as React from "react";
import * as Auth from "../Services/auth";
import * as SecureApi from "../Services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  id: number;
  name: string;
  token: string;
}
interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
}
interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@Auth: user");
      const storagedToken = await AsyncStorage.getItem("@Auth: token");
      if (storagedUser && storagedToken) {
        SecureApi.default.defaults.headers["Authorization"] = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const res = await Auth.signInFunction(email, password); 
      setUser(res); 
      console.log(res)
      await AsyncStorage.setItem("@Auth: user", JSON.stringify(res)); 
      await AsyncStorage.setItem("@Auth: token", res.token); 
      SecureApi.default.defaults.headers["Authorization"] = `Bearer ${res.token}`; 
    } catch (error) {
      console.error("Erro ao fazer login:", error); 
    }
  }
  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }
  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return React.useContext(AuthContext);
}