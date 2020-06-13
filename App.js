import React, { useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeCostumer from "./pages/HomeCostumer";
import Login from "./pages/Login";
import UserRegistration from "./pages/UserRegistration";
import HomeDriver from "./pages/HomeDriver";
import NewAd from "./pages/NewAd";
import AdDetail from "./pages/AdDetail";

function ProfileScreen() {
  return <View />;
}

const FeedStack = createStackNavigator();

function FeedStackScreen(props) {
  const { id, tipo } = props.route.params;
  return (
    <FeedStack.Navigator headerMode="none">
      <FeedStack.Screen
        name={tipo === "C" ? "HomeCostumer" : "HomeDriver"}
        component={tipo === "C" ? HomeCostumer : HomeDriver}
        initialParams={{ id }}
      />
    </FeedStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator headerMode="none">
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      {/* other screens */}
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs(props) {
  console.log("home tas param ", props);
  const { user } = props.route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={user.tipo === "C" ? "Meus Anúncios" : "Anuncios"}
        component={FeedStackScreen}
        initialParams={user}
      />
      <Tab.Screen name="Em Aberto" component={ProfileStackScreen} />
      <Tab.Screen name="Concluídos" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

export default function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState();
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none" initialRouteName="Home">
        {!login ? (
          <>
            <RootStack.Screen
              name="login"
              component={Login}
              initialParams={{ setLogin, setUser }}
              options={{
                headerShown: false,
              }}
            />
            <RootStack.Screen
              name="UserRegistration"
              component={UserRegistration}
              options={{ title: "Novo Usuário" }}
            />
          </>
        ) : (
          <>
            <RootStack.Screen
              name="Home"
              component={HomeTabs}
              initialParams={{ user }}
            />
            <RootStack.Screen
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
            <RootStack.Screen
              name="AdDetail"
              component={AdDetail}
              options={{
                title: "Detalhes",
              }}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
