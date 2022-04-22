import { BottomNavigation } from 'react-native-paper';
import PortfolioScreen from "../screens/PortfolioScreen"
import TapScreen from "../screens/TapScreen"
import TipScreen from "../screens/TipScreen"
import React, { useState } from "react";


export default function BottomBar() 
{
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'portfolio', title: 'Portfolio', icon: 'queue-music' },
        { key: 'tap', title: 'Tap', icon: 'album' },
        { key: 'tip', title: 'Tip', icon: 'history' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        portfolio: PortfolioScreen,
        tap: TapScreen,
        tip: TipScreen,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};