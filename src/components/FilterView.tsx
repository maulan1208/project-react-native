import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const MIN_PRICE = 0;
const MAX_PRICE = 500;


const FilterView = () => {
    const [minPrice, useMinPrice] = useState(50)
    const [maxPrice, useMaxPrice] = useState(250)
  return (
    <ScrollView>
        <View style={styles.header}>
            <Text style={{flex:1, fontWeight:"700", fontSize:17, color:"#333"}}>Filters</Text>
            <TouchableOpacity>
                <Text style={{fontWeight:"600"}}>Reset</Text>
            </TouchableOpacity>
        </View>

        {/* Range selector */}
        <View style={styles.range}>
            <Text style={{fontWeight:"700", fontSize:13, color:"#333", }}>
                Price Range
            </Text>
            <View style={{height:1, width:"100%", backgroundColor:"#D9D9D9", marginTop:40}}> 
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text>${MIN_PRICE}</Text>
                <Text>${MAX_PRICE}</Text>
            </View>
        </View>

        {/* Sports category */}
        <View style={styles.sports}>
            <Text style={{fontWeight:"700", fontSize:13, color:"#333", }}>Sports</Text>
            <View style={{
                    flexDirection:"row", 
                    flexWrap:"wrap", 
                    gap:12, 
                    paddingVertical:10}}>
                        {new Array(8).fill("").map((_, i) => {
                            return(
                                <Chip isSelected={i === 0} label={'item'} itemCount={i}/>
                            )
                        })}
                
            </View>                     
        </View>

        {/* Color category */}
        <View style={styles.sports}>
            <Text style={{fontWeight:"700", fontSize:13, color:"#333", }}>Color</Text>
            <View style={{
                    flexDirection:"row", 
                    flexWrap:"wrap", 
                    gap:12, 
                    paddingVertical:10}}>
                        {[
                            {
                                color:"red",
                                lable: "Red",
                                itemCount: 1
                            },
                            {
                                color:"blue",
                                lable: "Blue",
                                itemCount: 2
                            },
                            {
                                color:"black",
                                lable: "Black",
                                itemCount: 3
                            },
                            {
                                color:"gray",
                                lable: "Gray",
                                itemCount: 4
                            },
                            {
                                color:"tan",
                                lable: "Tan",
                                itemCount: 5
                            },
                            {
                                color:"green",
                                lable: "Green",
                                itemCount: 6
                            },
                            {
                                color:"white",
                                lable: "White",
                                itemCount: 7
                            },
                            {
                                color:"cyan",
                                lable: "Cyan",
                                itemCount: 8
                            },
                        ]
                        .map((item, i) => {
                            return (
                            <Chip key={item.itemCount} isSelected={i === 0} label={item.lable} itemCount={item.itemCount}
                                left={
                                    <View 
                                    style={{
                                        backgroundColor: item.color,
                                        width:16,
                                        height:16,
                                        borderRadius:8,
                                }}></View>} 
                            />
                                
                            
                            )
                            
                        })}
                
            </View>                     
        </View>
        
        {/* Sleeves category */}
        <View style={styles.sports}>
            <Text style={{fontWeight:"700", fontSize:13, color:"#333", }}>Sleeves</Text>
            <View style={{
                    flexDirection:"row", 
                    flexWrap:"wrap", 
                    gap:12, 
                    paddingVertical:10}}>
                        {[
                            {
                                label:"Short sleeve",
                                itemCount: 402
                            },
                            {
                                label:"Short sleeve",
                                itemCount: 347
                            },
                            {
                                label:"Short sleeve",
                                itemCount: 27,
                                
                            },
                        ].map((item, i) => {
                            return(
                                <Chip key={item.itemCount} isSelected={i === 0} label={item.label} itemCount={item.itemCount}
                                />
                            )
                        })}
                
            </View>                     
        </View>

        <TouchableOpacity >
                <View style={{
            flex: 1, 
            marginLeft:20,
            marginRight:20,
            paddingVertical: 20,
            width:"80%",
            backgroundColor:"black",
            alignItems:"center",
            }}>
                    <Text style={{color:"#fff", justifyContent:"center"}}>Apply filters</Text>

                </View>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:20
    },
    range:{
        paddingVertical:20, 
        paddingHorizontal:20
    },
    sports:{
        paddingVertical:20, 
        paddingHorizontal:20
    }
})

const Chip = ({isSelected, label, itemCount, left}: {isSelected: boolean, label: string, itemCount: number, left?: ReactNode}) => {
    return(
        <TouchableOpacity>
        <View 
            key={itemCount}
            style={{
            paddingHorizontal:16, 
            paddingVertical:8, 
            borderRadius: 100, 
            backgroundColor: isSelected ? "#191919": "#f5f5f5",
            flexDirection:"row",
            alignItems:"center"
            }}>
                {!!left &&<View style={{marginRight: 4}}>{left}</View>}
                <Text style={{
                        fontSize: 14, 
                        fontWeight:"600", 
                        color:isSelected ?  "#f5f5f5": "#191919"
                        }}>{label} {itemCount}
                </Text>
        </View>
    </TouchableOpacity>

    )
}

export default FilterView