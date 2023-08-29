import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Signup from "../screens/Signup"
import Start from "../screens/Start";
import RealTimeImg from '../screens/Camera';
import TabRouter from "../screens/TabRouter";

const Stack = createStackNavigator();

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TabRouter">
                <Stack.Screen name="Start" component={Start} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
                <Stack.Screen name="TabRouter" component={TabRouter} options={{headerShown: false}} />
                <Stack.Screen name="RealTimeImg" component={RealTimeImg} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator;