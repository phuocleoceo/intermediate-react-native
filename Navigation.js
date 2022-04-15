import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import TapScreen from "./screens/TapScreen";

const Stack = createNativeStackNavigator();

export default function Navigation()
{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tap">
                <Stack.Screen name="Tap" component={TapScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
