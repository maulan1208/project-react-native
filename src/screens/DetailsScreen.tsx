import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { RootStackScreenProps } from '../navigators/RootNavigator'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from "react-native-vector-icons/Feather";
import { Image } from '@rneui/base';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const DetailsScreen = ({navigation, route:{params:{img}}}: RootStackScreenProps<"Details">) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return ( 
    
    <View style={{flex:1}}>
      <Image style={styles.imgBackgroup} source={{
        uri: img
      }}/>
      <SafeAreaView 
        edges={["top"]} 
        style={{
          position:"absolute",
          top:0,
          left:0,
          right:0,          
        }}> 
        <View style={styles.header}>
            <TouchableOpacity 
              onPress={() => navigation.goBack()}
              style={styles.back}>
                <Icon name="chevron-left" size={25}/>
            </TouchableOpacity>
            <View style={{flex:1}}/>
            <TouchableOpacity style={styles.back}>
                <Icon name="heart" size={25}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.back}>
                <Icon name="shopping-bag" size={25}/>
            </TouchableOpacity>
            
        </View>
      </SafeAreaView>
        <GestureHandlerRootView style={{flex:1}}>
        <BottomSheet
          ref={bottomSheetRef}
          index={-0.5}
          snapPoints={snapPoints}
       >
            <Text>Awesome </Text>
       </BottomSheet>
        </GestureHandlerRootView>
       
    </View>
  )
}
const styles = StyleSheet.create({
  header:{
    flexDirection:"row", 
    alignItems:"center",
    padding:20,
    gap:8
  },
  back:{
    width:52,
    aspectRatio:1,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:52,
    borderWidth:1,
    borderColor:"#D9D9D9",  
  },
  imgBackgroup:{
    width:"100%",
    height:"100%"
  }
})
export default DetailsScreen