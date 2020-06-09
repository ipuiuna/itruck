import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import Firebase from "./config/firebaseConfig";
import Login from "./pages/Login";
import HomeCostumer from "./pages/HomeCostumer";
import HomeDriver from "./pages/HomeDriver";
import AdDetail from "./pages/AdDetail";
import UserRegistration from "./pages/UserRegistration";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  return (
    <NavigationContainer>
      {!login ? (
        // No token found, user isn't signed in
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="login"
            component={Login}
            initialParams={{ setLogin, setUser }}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="UserRegistration"
            component={UserRegistration}
            options={{ title: "Novo Usuário" }}
          />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator
          initialRouteName={user.tipo === "C" ? "HomeCustumer" : "HomeDriver"}
          drawerContent={(props) => {
            return (
              <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                  label="Logout"
                  onPress={() => {
                    setLogin(false);
                    setUser({});
                  }}
                />
              </DrawerContentScrollView>
            );
          }}
        >
          <Drawer.Screen
            name={"Home"}
            component={user.tipo === "C" ? HomeCostumer : HomeDriver}
            initialParams={{ user }}
          />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
