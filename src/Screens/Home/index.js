import * as Native from "react-native"
import * as React from "react"
import { useAuth } from "../../Contexts/auth"

export function Home() {
    const { user, signOut } = useAuth()
    function handleSignOut() {
        signOut()
    }
    return (
        <Native.View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ebebeb" }}>
            <Native.StatusBar backgroundColor={"#ebebeb"} barStyle={'dark-content'} />
            <Native.Text>Olá, {user ? user.name : "astolfo"}</Native.Text>
            <Native.Button title="Sign out" onPress={() => handleSignOut()} />
        </Native.View>
    )
}


