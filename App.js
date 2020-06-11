import React, { useState } from "react";
import { Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import Login from "./pages/Login";
import HomeCostumer from "./pages/HomeCostumer";
import HomeDriver from "./pages/HomeDriver";
import UserRegistration from "./pages/UserRegistration";
import NewAd from "./pages/NewAd";
import AdDetail from "./pages/AdDetail";

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
                    Alert.alert("Sair", "Deseja realmente sair?", [
                      {
                        text: "sim",
                        onPress: () => {
                          setLogin(false);
                          setUser({});
                        },
                      },
                      {
                        text: "não",
                        onPress: () => {
                          return;
                        },
                      },
                    ]);
                  }}
                />
              </DrawerContentScrollView>
            );
          }}
        >
          <Drawer.Screen
            name={user.tipo === "C" ? "HomeCostumer" : "HomeDriver"}
            component={user.tipo === "C" ? HomeCostumer : HomeDriver}
            options={{ title: "Home" }}
            initialParams={{ user }}
          />
          <Drawer.Screen
            name="NewAd"
            component={NewAd}
            initialParams={{ user }}
            options={{
              title: "Criar anúncio",
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Drawer.Screen name="AdDetail" component={AdDetail} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
