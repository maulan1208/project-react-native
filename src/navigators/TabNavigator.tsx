import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabScreenProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import Icon from 'react-native-vector-icons/Feather'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList, RootStackScreenProps } from './RootNavigator'
import { CompositeScreenProps } from '@react-navigation/native'
import CartScreen from '../screens/CartScreen'
import LoginScreen from '../screens/LoginScreen'
export type TabsStackParamList = {
    Home: undefined,
    Cart: undefined,
    Payment: undefined,
    Profile: undefined,
}

const TabsStack = createBottomTabNavigator<TabsStackParamList>()

export type TabsStackScreenProps<T extends keyof TabsStackParamList> = 
    CompositeScreenProps<
        BottomTabScreenProps<TabsStackParamList, T>,
        RootStackScreenProps<"TabsStack">
    >;

const TabNavigator = () => {
  return (
    <TabsStack.Navigator
    screenOptions={{
        // tabBarShowLabel:false,
    }}>
        <TabsStack.Screen 
            name='Home'
            component={HomeScreen}
            options={{
                headerShown: false,
                tabBarIcon (){
                    return(
                        <Icon name='home' size={25}/>
                    )
                }
            }}/>
        <TabsStack.Screen 
            name='Cart' 
            component={CartScreen}
            options={{
                headerShown: false,
                tabBarIcon (){
                    return(
                        <Icon name='shopping-cart' size={25}/>
                    )
                }
            }}/>
        <TabsStack.Screen 
            name='Payment' 
            component={LoginScreen}
            options={{
                headerShown: false,
                tabBarIcon (){
                    return(
                        <Icon name='cast' size={25}/>
                    )
                }
            }}/>
        <TabsStack.Screen 
            name='Profile' 
            component={Ex}
            options={{
                headerShown: false,
                tabBarIcon (){
                    return(
                        <Icon name='user' size={25}/>
                    )
                }
            }}/>
    </TabsStack.Navigator>
  )
}
const Ex = () => {
    return(
        <View>
            <Text>dsf</Text>
        </View>
    )
}
export default TabNavigator