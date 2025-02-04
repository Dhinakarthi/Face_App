import React from "react";
import { store } from "./app/redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./app/components/SplashScreen";
import QRScreen from "./app/components/QRScreen";
import NetworkScreen from "./app/components/NetworkActivity";
import CameraScreen from "./app/components/CameraScreen";

const App = () => {

    const Stack = createNativeStackNavigator();

    return(
        <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName='splashscreen'
            screenOptions={{
                headerShown: false,
            }}
            >
                <Stack.Screen name='splashscreen' component={SplashScreen}/>
                <Stack.Screen name='qrscreen' component={QRScreen}/>
                <Stack.Screen name="networkscreen" component={NetworkScreen}/>
                <Stack.Screen name="camerascreen" component={CameraScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    )
};

export default App;