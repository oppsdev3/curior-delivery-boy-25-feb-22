 import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";

import { RalewayBold, RalewayLight, RalewayRegular, RalewaySemiBold } from './fonts';
import { useDispatch } from 'react-redux';
import { mark_delivered } from '../redux/userAction';
import axios from 'axios';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get("window");

const DeliveryItem = ({imgSrc, title, to, modeOfPayment, id, deliveryaccepted, deliveryitem, pickedStatus, deliveryStatus, Price, CourierInfo, CourierType, serviceType, sendingAddress, Frangible}) => {
    
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.user.user)

    const storeData = async () => {
        try {
          await AsyncStorage.setItem('token', user.token);
        } catch (e) {
          // saving error
          console.log(e)
        }
      }

    useEffect(()=>{
        storeData();
    })

    const pickHandler=()=>{
        axios.patch(`https://delivery-boy-api.herokuapp.com/api/product/deliveryboytoaccept/${id}`,
        {
            "deliveryaccepted": "accepted"
        },
        {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${user.token}`,
        }}
        ).then((res)=>console.log(res.data)
        )
        .catch((err)=>console.log(err.message))
    };

    const closeHandler=()=>{
        axios.patch(`https://delivery-boy-api.herokuapp.com/api/product/deliveryboytoaccept/${id}`,
        {
            "deliveryaccepted": "notaccepted"
        },
        {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${user.token}`,
        }}
        ).then((res)=>console.log(res.data)
        )
        .catch((err)=>console.log(err.message))
    }

    const markDeliveryHandler=()=>{
        axios.patch(`https://delivery-boy-api.herokuapp.com/api/product/pickedStatus/${id}`,
        {
            "pickedStatus": true
        },
        {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${user.token}`,
        }}
        ).then((res)=>{
            console.log(res.data);
        }
        )
        .catch((err)=>console.log(err.message));
    }

    const deliveryHandler= ()=>{
        axios.patch(`https://delivery-boy-api.herokuapp.com/api/product/deliveredStatus/${id}`,
        {
            "deliveredStatus": true
        },
        {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${user.token}`,
        }}
        ).then((res)=>{
            console.log(res.data);
            dispatch(mark_delivered({
                title: title,
                to: to,
                id:id,
                modeOfPayment: modeOfPayment,
                imgSrc: imgSrc,
                CourierType:CourierType,
                CourierInfo:CourierInfo,
                Frangible:Frangible,
                sendingAddress:sendingAddress,
                Price:Price,
                serviceType:serviceType
            }))
        }
        )
        .catch((err)=>console.log(err.message));
    }


    const mapHandler=()=>{
        if(deliveryaccepted==="accepted"){
        navigation.navigate("Map",
        {
            "imgSrc": imgSrc,
            "to": to,
            "modeOfPayment": modeOfPayment,
            "buttonText": (deliveryaccepted==="accepted" && pickedStatus===false) ? "Mark Picked" :"Mark Delivered",
            "title": title,
            "color": (deliveryaccepted==="accepted" && pickedStatus===false) ? "#7084fd" : "#fdb916",
            "CourierType":CourierType,
            "CourierInfo":CourierInfo,
            "Frangible":Frangible,
            "sendingAddress":sendingAddress,
            "Price":Price,
            "serviceType":serviceType
        })}
    }
    
    if((deliveryaccepted==="accepted" || deliveryaccepted==="toaccept")&& deliveryStatus===false){
    return (
        <>
        <TouchableOpacity activeOpacity={0.8} style={styles.container}
        onPress={mapHandler}
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
                        {(deliveryaccepted==="toaccept")
                         &&
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <TouchableOpacity 
                            onPress={closeHandler}
                            activeOpacity={0.8} style={{backgroundColor:"#f14632", padding:10, borderRadius:10}}
                            
                            >
                                <AntDesign
                                name="close"
                                size={24}
                                color="white"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#7bda19", padding:10, borderRadius:10, marginLeft:10}}
                            onPress={pickHandler}
                            >
                                <Text style={{fontFamily:RalewayLight, color:"white", fontSize:15}}>Accept</Text>
                            </TouchableOpacity>
                        </View>}
                        {(deliveryaccepted==="accepted" && deliveryStatus===false && pickedStatus===false)
                         && 
                        <TouchableOpacity 
                        activeOpacity={0.8} style={{marginBottom:10,backgroundColor:"#7084fd", padding:10, borderRadius:5, alignItems:"center"}}
                        onPress={markDeliveryHandler}
                        >
                            <Text style={{fontSize:15, color:"white", fontFamily:RalewayRegular}}>Marked Picked</Text>
                        </TouchableOpacity>
                        }
                        {
                        ((pickedStatus===true) && (deliveryStatus===false)) && 
                        <TouchableOpacity 
                        onPress={deliveryHandler}
                        activeOpacity={0.8} style={{marginBottom:10,backgroundColor:"#fdb916", padding:10, borderRadius:5, alignItems:"center"}}>
                            <Text style={{fontSize:15, color:"white", fontFamily:RalewayRegular}}>Mark Delivered</Text>
                        </TouchableOpacity>
                        }
                        {
                        (deliveryStatus===true) && 
                        <TouchableOpacity 
                        activeOpacity={0.8} style={{marginBottom:10,backgroundColor:"#fdb916", padding:10, borderRadius:5, alignItems:"center"}}>
                            <Text style={{fontSize:15, color:"white", fontFamily:RalewayRegular}}>Delivered</Text>
                        </TouchableOpacity>
                        }
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
                numberOfLines={1}
                >{to}</Text>
            </View>
        </TouchableOpacity>
        </>
    )}
    else{
        return(
            <View style={{display:"none"}}>
                <Text></Text>
            </View>
        )
    }
}

export default DeliveryItem

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