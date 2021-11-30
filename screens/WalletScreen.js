import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react/cjs/react.development'
import PaymentItem from '../components/PaymentItem'

const WalletScreen = () => {

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={{fontSize:25, color:"white", fontWeight:"bold"}}>Earnings</Text>
                <Text style={{fontSize:40, color:"white", fontWeight:"bold", marginVertical:15}}>₹ 178.20</Text>
            </View>
            <View style={styles.content}>
                <Text style={{color:"gray", fontWeight:"bold", fontSize:18, padding:10}}>Recent Transaction</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <PaymentItem
                    title="Food Delivered"
                    type="Economy Delivery"
                    imgSrc={require("../assets/home2.png")}
                    price="8.50"
                    />
                    <PaymentItem
                    title="Food Delivered"
                    type="Express Delivery"
                    imgSrc={require("../assets/home2.png")}
                    price="12.60"
                    />
                    <PaymentItem
                    title="Courier Delivered"
                    type="Express Delivery"
                    imgSrc={require("../assets/home1.png")}
                    price="11.50"
                    />
                    <PaymentItem
                    title="Grocery Delivered"
                    type="Express Delivery"
                    imgSrc={require("../assets/home3.png")}
                    price="5.70"
                    />
                    <PaymentItem
                    title="Courier Delivered"
                    type="Economy Delivery"
                    imgSrc={require("../assets/home1.png")}
                    price="10.0"
                    />
                    <PaymentItem
                    title="Food Delivered"
                    type="Economy Delivery"
                    imgSrc={require("../assets/home2.png")}
                    price="8.50"
                    />
                    <PaymentItem
                    title="Food Delivered"
                    type="Economy Delivery"
                    imgSrc={require("../assets/home2.png")}
                    price="8.50"
                    />
                </ScrollView>
            </View>
        </View>
    )
}

export default WalletScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor: "#fcb000",
        flex:1
    },
    header:{
        alignItems:"center",
        marginVertical:15
    },
    content:{
        backgroundColor:"lightgray",
        flex:1,
        borderTopLeftRadius:20,
    }
})