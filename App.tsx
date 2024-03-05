import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native'
import RootNavigator from './src/navigators/RootNavigator'
import 'react-native-gesture-handler'
const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      backgroud: "#f5f5f5",
      text: "#191919",
      borer: "#D9D9D9"
    },
  };
  return (
    <View style={styles.container}>
      <NavigationContainer theme={MyTheme}>
        <RootNavigator/>
        <StatusBar hidden={true}/>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})

export default App
