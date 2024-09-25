import * as StackNavigation from "@react-navigation/native-stack"
import AuthRoutes from "./whileNotAuth.routes"
import AppRoutes from "./whileAuth.routes"

function Routes() {
    return (
        <AuthRoutes />
    )
}

export default Routes