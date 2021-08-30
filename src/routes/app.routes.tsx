import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Extract } from '../screens/Extract';
import { RegisterBillet } from '../screens/RegisterBillet';
import { ScanBarCode } from '../screens/ScanBarCode';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Extract"
                component={Extract}
                options={{
                    ...TransitionPresets.SlideFromRightIOS,
                  }}
            />
            <Screen
                name="ScanBarCode"
                component={ScanBarCode}
            />
            <Screen
                name="RegisterBillet"
                component={RegisterBillet}
            />
        </Navigator>
    )
}