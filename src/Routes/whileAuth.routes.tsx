import * as React from "react";
import * as StackNavigation from "@react-navigation/native-stack";
import { Home } from "../Screens/whileAuth/Home";

const AppStack = StackNavigation.createNativeStackNavigator();
function AppRoutes() {
  return (
    <AppStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
}

export default AppRoutes;
