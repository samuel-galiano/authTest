import * as React from "react"
import * as Native from "react-native"
import { useAuth } from "../Contexts/auth"
import AuthRoutes from "./whileNotAuth.routes"
import AppRoutes from "./whileAuth.routes"

function Routes() {
    const { signed, loading } = useAuth()
    if(loading) {
        return (
            <Native.View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ebebeb"}}>
                <Native.ActivityIndicator size={"large"} color={"#23356D"} />
            </Native.View>
        )
    }
    return signed ? <AppRoutes /> : <AuthRoutes />
}
export default Routes