import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  }
}

const App = () => {
  const [loaded] = useFonts({
    OswaldBold: require("./assets/fonts/Oswald-Bold.ttf"),
    OswaldSemiBold: require("./assets/fonts/Oswald-SemiBold.ttf"),
    OswaldMedium: require("./assets/fonts/Oswald-Medium.ttf"),
    OswaldRegular: require("./assets/fonts/Oswald-Regular.ttf"),
    OswaldLight: require("./assets/fonts/Oswald-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;