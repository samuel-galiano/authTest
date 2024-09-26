import * as StackNavigation from "@react-navigation/native-stack";
import * as React from "react";

import { Welcome } from "../Screens/whileNotAuth/Welcome";
import { Login } from "../Screens/whileNotAuth/Login";

const AuthStack = StackNavigation.createNativeStackNavigator();
function AuthRoutes() {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome"
    >
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
}
export default AuthRoutes;
