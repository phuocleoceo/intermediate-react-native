import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import PortfolioScreen from "./screens/PortfolioScreen";
import TapScreen from "./screens/TapScreen";

const Stack = createNativeStackNavigator();

export default function Navigation()
{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Portfolio">
                <Stack.Screen name="Tap" component={TapScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Portfolio" component={PortfolioScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
