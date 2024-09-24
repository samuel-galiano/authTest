import * as StackNavigation from "@react-navigation/native-stack"
import {Welcome} from "../Screens/Welcome"
import {Login} from "../Screens/Login"

const Stack = StackNavigation.createNativeStackNavigator()

function Routes() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    )
}

export default Routes