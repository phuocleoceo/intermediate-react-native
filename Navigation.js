import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';

import PortfolioScreen from "./screens/PortfolioScreen";
import TapScreen from "./screens/TapScreen";
import TipScreen from "./screens/TipScreen";

const Tab = createMaterialBottomTabNavigator();

export default function Navigation()
{
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Tap"
                activeColor="#ffffff"
                inactiveColor="#a8a5a5"
                barStyle={{ backgroundColor: '#6200ee' }}
            >
                <Tab.Screen
                    name="Tap"
                    component={TapScreen}
                    options={{
                        tabBarLabel: 'Tap',
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="gesture-tap" color={color} size={26} />
                    }}
                />

                <Tab.Screen
                    name="Portfolio"
                    component={PortfolioScreen}
                    options={{
                        tabBarLabel: 'Portfolio',
                        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="briefcase-account" color={color} size={26} />
                    }}
                />

                <Tab.Screen
                    name="Tip"
                    component={TipScreen}
                    options={{
                        tabBarLabel: 'Tip',
                        tabBarIcon: ({ color }) => <FontAwesome5 name="file-invoice-dollar" color={color} size={26} />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
