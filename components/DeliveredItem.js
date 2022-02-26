import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";
import { RalewayBold, RalewayLight, RalewayRegular, RalewaySemiBold } from './fonts';

const {width} = Dimensions.get("window");

const DeliveredItem = ({imgSrc, title, Price, sendingAddress, to, CourierType, modeOfPayment, serviceType,CourierInfo,Frangible}) => {
    
    const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container}
        onPress={()=>navigation.navigate("Map", {"serviceType": serviceType,"Frangible": Frangible,"CourierInfo" :CourierInfo,"title": title, "sendingAddress": sendingAddress, "to": to, "CourierType": CourierType, "buttonText": "Delivered", "Price": Price, "modeOfPayment": modeOfPayment, "color": "#fdb916"})}
        >
            <View style={{padding:20}}>
                <View style={{flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <Image
                        source={require("../assets/home1.png")}
                        style={{height: 40, width:40, resizeMode:"contain"}}
                        />
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:18, fontFamily:RalewayBold, color:"black"}}>{title}</Text>
                            <Text style={{fontSize:15, color:"lightgray", fontFamily:RalewaySemiBold}}>{serviceType}</Text>
                            <View style={{marginVertical:10}}>
                                <Text style={{fontSize:14, color:"lightgray", marginBottom:5, fontFamily:RalewaySemiBold}}>Payment Mode</Text>
                                <Text style={{fontSize:14, color:"black", fontFamily:RalewaySemiBold}}>{modeOfPayment}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{}}>
                        <TouchableOpacity 
                        activeOpacity={0.8} style={{marginBottom:10,backgroundColor:"#fdb916", padding:10, borderRadius:5, alignItems:"center"}}>
                            <Text style={{fontSize:15, color:"white", fontFamily:RalewayRegular}}>Delivered</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize:15, color:"lightgray",marginVertical:5, fontFamily:RalewaySemiBold}}>Payment</Text>
                        <Text style={{fontSize:16, color:"black", fontFamily:RalewayBold}}>₹ {Price}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={{fontFamily:RalewayBold, fontSize:15, color:"black", maxWidth:width-290}}
                numberOfLines={1}
                >{sendingAddress}</Text>
                <View style={{flexDirection:"row", alignItems:"center",justifyContent:"center"}}>
                    <Entypo
                    name="location-pin"
                    size={24}
                    color="#fdb916"
                    />
                    <Text style={{fontSize:16, color:"gray", fontFamily:RalewayBold, marginHorizontal:5, marginBottom:10}}>........</Text>
                    <FontAwesome5
                    name="location-arrow"
                    size={20}
                    color="#fdb916"
                    />
                </View>
                <Text style={{fontFamily:RalewayBold, fontSize:15, color:"black", maxWidth:width-250}}
                numberOfLines={1}>{to}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default DeliveredItem

const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        backgroundColor:"white",
        borderRadius:10,
        elevation:5,
        margin:5
    },
    footer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"whitesmoke",
        padding:10,
        borderBottomEndRadius:20,
        borderBottomLeftRadius:20
    }
})
