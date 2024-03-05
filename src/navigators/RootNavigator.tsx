import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { NavigatorScreenParams } from '@react-navigation/native';
import TabNavigator, { TabsStackParamList } from './TabNavigator';

export type RootStackParamList = {
    TabsStack: NavigatorScreenParams<TabsStackParamList>;
    Details: {
      img: string
    };
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

export type RootStackScreenProps<T extends keyof RootStackParamList> = 
  NativeStackScreenProps<RootStackParamList, T>

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
        <RootStack.Screen 
            name="TabsStack" 
            component={TabNavigator} 
            options={{
                headerShown:false
                }}/>
        <RootStack.Screen 
          name='Details' 
          component={DetailsScreen}
          options={{
            headerShown:false
            }} />
    </RootStack.Navigator>
  )
}

export default RootNavigator


