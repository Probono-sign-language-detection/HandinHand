import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Signup from "../screens/Signup"
import Start from "../screens/Start";
import RealTimeImg from '../screens/RealTimeImg';
import TabRouter from "../screens/TabRouter";
import Test from "../screens/Test";
import Base from "../screens/Base";

const Stack = createStackNavigator();

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
                <Stack.Screen name="Start" component={Start} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
                <Stack.Screen name="TabRouter" component={TabRouter} options={{headerShown: false}} />
                <Stack.Screen name="RealTimeImg" component={Test} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator;