import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/screen/Login";
import CreateUser from "./src/screen/CreateUser";
import FeedBook from "./src/screen/FeedBook";
import DrawerMenu from "../src/drawerMenu/DrawerMenu";


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
          options={{ 
            title: "Cadastro",
            // headerShown: false
          }}
        />

        <Stack.Screen
          name="DrawerMenu"
          component={DrawerMenu}
          options={{ 
            title: "Menu",
            // headerShown: false
          }}
        />

        <Stack.Screen
          name="FeedBook"
          component={FeedBook}
          options={{
            title: "FeedBook",
            // headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
};