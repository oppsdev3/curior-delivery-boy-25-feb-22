import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const PaymentItem = ({price, title, imgSrc, type}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.box}>
            <View style={{}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image
                    source={imgSrc}
                    style={{height:40, width:40, resizeMode:"contain", marginRight:10}}
                    />
                    <View>
                        <Text style={{fontSize:14, fontWeight:"bold",color:"black"}}>{title}</Text>
                        <Text style={{fontSize:13, color:"gray"}}>{type}</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <View style={{alignItems:"flex-end"}}>
                    <Text style={{fontSize:14, color:"gray", fontWeight:"bold"}}>₹ {price}</Text>
                    <Text style={{fontSize:13, fontWeight:"bold", color:"black", marginTop:5}}>Paid via Paypal</Text>
                </View>
                <View style={{marginLeft:10, alignItems:"flex-end"}}>
                    <Text style={{fontSize:14, color:"gray", fontWeight:"bold"}}>₹ 3.50</Text>
                    <Text style={{fontSize:13, fontWeight:"bold", color:"black", marginTop:5}}>Earned</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PaymentItem

const styles = StyleSheet.create({
    box:{
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",
        padding:20,
        borderRadius:10,
        backgroundColor:"white",
        margin:10
    }
})
