import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/Login";
import HomeCostumer from "./pages/HomeCostumer";
import HomeDriver from "./pages/HomeDriver";
import AdDetail from "./pages/AdDetail";
import UserRegistration from "./pages/UserRegistration";

const Stack = createStackNavigator();

function App() {
  const [login, setLogin] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!login ? (
          // No token found, user isn't signed in
          <Stack.Screen
            name="login"
            // component={Login}
            {() => <Login setLogin={setLogin}/>}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          // User is signed in
          <Stack.Screen name={"Home"} component={HomeCostumer} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
