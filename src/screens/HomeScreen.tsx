import { useTheme } from "@react-navigation/native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Button, FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import MasonryList from '@react-native-seoul/masonry-list'
import BottomSheet, { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import CustomBackdrop from "../components/CustomBackdrop";
import { TabsStackScreenProps } from "../navigators/TabNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const CATEGORIES = [
    "Clothing",
    "Shoes",
    "Accessories",
    "Accessories",
    "Accessories",
    "Accessories",
    "T_shirt",
    "T_shirt",
]

const IMG_LIST = [
    {
        id:1,
        imageUrl:
          "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        title: "PUMA Everyday Hussle",
        price: 312,
      },
      {
        id:2,
        imageUrl:
          "https://images.unsplash.com/photo-1599255068390-206e0d068539?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        title: "PUMA Everyday Hussle",
        price: 876,
      },
      {
        id:3,
        imageUrl:
          "https://images.unsplash.com/photo-1553859943-a02c5418b798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        title: "PUMA Everyday Hussle",
        price: 129,
      },
      {
        id:4,
        imageUrl:
          "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        title: "PUMA Everyday Hussle",
        price: 543,
      },
      {
        id:5,
        imageUrl:
          "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        title: "PUMA Everyday Hussle",
        price: 981,
      },
]
const HomeScreen = ({navigation}: TabsStackScreenProps<"Home">) => {
    const [categoriesIndex, setCategoriesIndex] = useState(0)

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    
    const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
    
      
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
      }, []);
    
    return(
        <ScrollView>
            <SafeAreaView style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Image 
                        source={require('../assets/download.png')}
                        style={styles.img}
                        resizeMode="cover"
                    />
                    <View style={{flex:1}}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: "600",
                            marginBottom: 8
                        }}>
                            Hi, .... 👋
                        </Text>
                        <Text
                            style={{opacity:0.75}}
                        >Discover fashtion that suit your style</Text>
                    </View>
                    <TouchableOpacity style={styles.notification}>
                            <Icon name="bell" size={25}/>
                    </TouchableOpacity>
                </View>

                {/* Search bar */}
                <View style={styles.search}>
                    <TouchableOpacity style={styles.input}>
                        <Icon name="search" size={25}/>
                        <Text style={{
                            opacity:0.75
                        }}>Search</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handlePresentModalPress} style={styles.filter}>
                        <Icon style={{color:"#fff"}} name="filter" size={25}/>
                    </TouchableOpacity>
                </View>

                {/* Container view */}
                <View style={styles.collections}>
                    {/* Title */}
                    <View style={styles.title}>
                        <Text style={{fontSize: 20, fontWeight:"700"}}>New Collections</Text>
                        <TouchableOpacity>
                            <Text>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        {/* Card */}
                        <Card
                        onPress={() => {
                            navigation.navigate("Details", {
                                img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VCUyMHNoaXJ0fGVufDB8fDB8fHww",
                            })
                        }} 
                        pirce={123}
                        imgUrl='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VCUyMHNoaXJ0fGVufDB8fDB8fHww'/>
                        <View style={{flex:1, gap: 12}}>
                            <Card
                            onPress={() => {
                                navigation.navigate("Details", {
                                    img:"https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
                                })
                            }}
                             pirce={433}
                            imgUrl='https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D'
                            />
                            <Card
                            onPress={() => {
                                navigation.navigate("Details", {
                                    img:"https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VCUyMHNoaXJ0fGVufDB8fDB8fHww"
                                })
                            }}
                            pirce={765}
                            imgUrl='https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VCUyMHNoaXJ0fGVufDB8fDB8fHww'
                            />
                        </View>
                    </View>
                </View>

                <View style={{
                    marginVertical: 20
                }}>
                    <FlatList
                        contentContainerStyle={{
                            marginHorizontal:25,
                            gap: 20
                        }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={CATEGORIES}
                        renderItem={({item, index}) => {
                            const isSelected = categoriesIndex === index;
                            return(
                                <TouchableOpacity
                                onPress={() => setCategoriesIndex(index)}
                                style={{
                                    backgroundColor: isSelected ? "#333" : "#fff",
                                    paddingVertical: 12,
                                    paddingHorizontal:16,
                                    borderRadius: 50,
                                    borderWidth: isSelected ? 0 : 1,
                                    borderColor: "#D9D9D9"
                                    
                                }}>
                                    <Text style={{
                                        color: isSelected ? "#fff" : "#333",
                                        fontWeight:"500",
                                        opacity: isSelected ? 1: 0.5
                                    }}>
                                        {item}
                                    </Text>   
                                </TouchableOpacity>
                                )
                            }   
                        }   
                    />
                </View>
                
                {/* Masonry */}
                <View>
                <MasonryList
                    data={IMG_LIST}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    containerStyle={{paddingHorizontal:24}}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, i}: any) => {
                        return (
                            <View style={{
                                aspectRatio: i === 0 ? 1 : 2 / 3,
                                position:"relative",
                                overflow:"hidden",
                                marginTop: 12,
                                borderRadius: 24
                                }}
                            >
                                <Image
                                    source={{uri: item.imageUrl}}
                                    resizeMode="cover"
                                    style={StyleSheet.absoluteFill}
                                />

                                <View >
                                    <View style={{
                                        flexDirection: "row",
                                        padding: 16,
                                        gap:8
                                    }}>
                                        <Text style={styles.textImg}>
                                            {item.title}
                                        </Text>
                                        <TouchableOpacity style={styles.favorite}>
                                            <Icon name="heart" size={20}/>
                                        </TouchableOpacity>
                                        
                                    </View>
                                </View>

                                <View style={{
                                    flex:1,
                                    }}>
                                    <View style={{
                                        backgroundColor:"rgba(0, 0, 0, 0.35)",
                                        left:16,
                                        bottom: 15,
                                        width:"80%",
                                        height: 50,
                                        justifyContent:"space-between",
                                        position:"absolute",
                                        paddingVertical: 12,
                                        paddingHorizontal:16,
                                        borderRadius: 100,
                                        flexDirection:"row"
                                        }}>
                                        <Text style={{
                                            color:"#fff",
                                            fontWeight:"500"
                                        }}>
                                            ${item.price}
                                        </Text>
                                        <TouchableOpacity style={{
                                            backgroundColor:"#fff",
                                            paddingHorizontal:16,
                                            paddingVertical:2,
                                            borderRadius:100,
                                           
                                        }}>
                                            <Icon name="shopping-cart" size={20} color="#333"/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                        
                    }}
                    onEndReachedThreshold={0.1}
                />
                </View>

            </SafeAreaView>

            <GestureHandlerRootView style={{flex:1}}>
                <BottomSheetModalProvider>
                
                    
                        <BottomSheetModal
                            ref={bottomSheetModalRef}
                            index={1}
                            snapPoints={snapPoints}
                            >
                                <View><Text>hello</Text></View>
                        </BottomSheetModal>
                    
                    
                </BottomSheetModalProvider>
            </GestureHandlerRootView>
            </ScrollView>
    )
}

const Card = ({pirce, imgUrl, onPress }:{pirce: number, imgUrl:string, onPress?: () => void }) => {
    return(
        <TouchableOpacity
        onPress={onPress} 
        style={{
            flex:1,
            position:"relative",
            overflow:"hidden",
            borderRadius: 24
        }}>
            <Image 
                source={{uri:imgUrl}}
                resizeMode="cover"
                style={{
                    position: "absolute",
                    top:0,
                    bottom:0,
                    right:0,
                    left:0,
                }}
            />
            <View style={{
                backgroundColor:"rgba(0, 0, 0, 0.25)",
                left:16,
                top:16,
                position:"absolute",
                paddingVertical: 12,
                paddingHorizontal:16,
                borderRadius: 50
            }}>
                <Text style={{
                    color:"#fff",
                    fontWeight:"500"
                }}>${pirce}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 24
    },
    // Header 
    header:{
        paddingTop:7,
        paddingHorizontal:24,
        flexDirection:"row",
        alignItems:"center",
        gap:8
    },
    img:{
        width:52,
        aspectRatio:1,
        borderRadius:52
    },
    notification:{
        width:52,
        aspectRatio:1,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:52,
        borderWidth:1,
        borderColor:"#D9D9D9"
    },
    // Search bar
    search:{
        flexDirection:"row",
        paddingHorizontal: 24,
        paddingTop: 20,
        gap: 12
    },
    input:{
        flex: 1,
        height: 52,
        borderRadius: 52,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        alignItems: "center",
        paddingHorizontal: 24,
        flexDirection:"row",
        gap:12
    },
    filter:{
        width:52,
        aspectRatio:1,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:52,
        borderWidth:1,
        borderColor:"#D9D9D9",
        backgroundColor:"#333"
    },
    // Container view
    collections:{
        paddingHorizontal:24
    },
    title:{
        paddingVertical:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    content:{
        flexDirection:"row",
        height: 200,
        gap: 12
    },
    // Masonry
    textImg:{
        flex:1,
        fontWeight:"600",
        fontSize:16,
        color:"#191919"
    },
    favorite:{
        backgroundColor:"#fff",
        borderRadius:  100,
        height: 32,
        aspectRatio: 1,
        alignItems:"center",
        justifyContent:"center"
    }

    
    
    
})

export default HomeScreen