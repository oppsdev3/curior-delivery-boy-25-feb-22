import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const {width} = Dimensions.get("window");

const DeliveryItem = ({imgSrc, title, price, from, to, type, modeOfPayment, buttonText}) => {
    return (
        <View style={styles.container}>
            <View style={{padding:20}}>
                <View style={{flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <Image
                        source={imgSrc}
                        style={{height: 40, width:40, resizeMode:"contain"}}
                        />
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:18, fontWeight:"bold", color:"black"}}>{title}</Text>
                            <Text style={{fontSize:16, color:"gray"}}>{type}</Text>
                            <View style={{marginVertical:10}}>
                                <Text style={{fontSize:15, color:"gray", marginBottom:5}}>Payment Mode</Text>
                                <Text style={{fontSize:16, color:"black", fontWeight:"bold"}}>{modeOfPayment}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{}}>
                        <TouchableOpacity activeOpacity={0.8} style={{marginBottom:10,backgroundColor:"#fbc000", padding:10, borderRadius:10, alignItems:"center"}}>
                            <Text style={{fontSize:15, color:"white", fontWeight:"bold"}}>{buttonText}</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize:15, color:"gray",marginVertical:5}}>Payment</Text>
                        <Text style={{fontSize:16, color:"black", fontWeight:"bold"}}>₹ {price}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={{fontWeight:"bold", fontSize:15, color:"black", maxWidth:width-290}}
                numberOfLines={1}
                >{from}</Text>
                <View style={{flexDirection:"row", alignItems:"center",justifyContent:"center"}}>
                    <Entypo
                    name="location-pin"
                    size={24}
                    color="#fcb000"
                    />
                    <Text style={{fontSize:16, color:"gray", fontWeight:"bold", marginHorizontal:5}}>......</Text>
                    <FontAwesome5
                    name="location-arrow"
                    size={20}
                    color="#fbc000"
                    />
                </View>
                <Text style={{fontWeight:"bold", fontSize:15, color:"black", maxWidth:width-250}}
                numberOfLines={1}
                >{to}</Text>
            </View>
        </View>
    )
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
        padding:10
    }
})
