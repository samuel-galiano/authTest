import * as React from "react"
import * as Auth from "../Services/auth"

interface AuthContextData {
    signed: boolean
    user: object | null
    signIn(): Promise<void>
}

interface AuthProviderProps {
    children: React.ReactNode
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData)
export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = React.useState<object | null>(null)
    async function signIn() {
        const res = await Auth.signInFunction()
        setUser(res.user)
    }
    return (
        <AuthContext.Provider value={{signed: Boolean(user), user, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext