import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/screen/Login";
import CreateUser from "./src/screen/CreateUser";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            // headerShown: false
          }}
        />

        <Stack.Screen
          name="CreateUser"
          component={CreateUser}
          options={{ title: "SIND UP" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
};