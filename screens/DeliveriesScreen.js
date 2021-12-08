import React, {useState} from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DeliveryItem from '../components/DeliveryItem';
import { RalewayBold, RalewaySemiBold } from '../components/fonts';

const DeliveriesScreen = () => {

    const [click, setClick] = useState("New Deliveries");

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.8}
                onPress={()=>setClick("New Deliveries")}
                >
                    <Text style={{opacity:(click==="New Deliveries")? 1: 0.5, color:"white", fontSize:22, fontFamily:RalewayBold}}>New Deliveries</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}
                onPress={()=>setClick("Delivered")}
                >
                    <Text style={{opacity:(click==="Delivered")? 1: 0.5, color:"white", fontSize:22, fontFamily:RalewayBold}}>Delivered</Text>
                </TouchableOpacity>
            </View>
            {(click==="New Deliveries")?
            <View style={styles.content}>
                <Text style={{fontSize:18, color:"gray", padding:20, fontFamily:RalewaySemiBold}}>3 Active Deliveries</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <DeliveryItem
                    title="Courier"
                    imgSrc={require("../assets/home1.png")}
                    price="8.50"
                    type="Economy Delivery"
                    buttonText="Marked Picked"
                    from="28 Mott Street."
                    to="St. Merry Church"
                    modeOfPayment="Cash On Pickup"
                    />
                    <DeliveryItem
                    title="Food"
                    imgSrc={require("../assets/home2.png")}
                    price="13.50"
                    type="Express Delivery"
                    buttonText="Marked Picked"
                    from="Silver Leaf Restaurant"
                    to="Hemilton Road"
                    modeOfPayment="Paypal"
                    />
                    <DeliveryItem
                    title="Grocery"
                    imgSrc={require("../assets/home3.png")}
                    price="5.50"
                    from="7-11 Grocery Mart"
                    type="Economy Delivery"
                    buttonText="Marked Picked"
                    to="Hemilton Road"
                    modeOfPayment="Paypal"
                    />
                    <DeliveryItem
                    title="Courier"
                    imgSrc={require("../assets/home1.png")}
                    price="8.50"
                    type="Economy Delivery"
                    buttonText="Marked Picked"
                    from="28 Mott Street."
                    to="St. Merry Church"
                    modeOfPayment="Cash On Pickup"
                    />
                </ScrollView>
            </View>
            :
            <View style={styles.content}>
                <Text style={{fontSize:18, color:"gray", padding:20, fontFamily:RalewaySemiBold}}>Past Deliveries</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <DeliveryItem
                    title="Courier"
                    imgSrc={require("../assets/home1.png")}
                    price="8.50"
                    type="Economy Delivery"
                    from="28 Mott Street."
                    buttonText="Delivered"
                    to="St. Merry Church"
                    modeOfPayment="Cash On Pickup"
                    />
                    <DeliveryItem
                    title="Food"
                    imgSrc={require("../assets/home2.png")}
                    price="13.50"
                    type="Express Delivery"
                    from="Silver Leaf Restaurant"
                    buttonText="Delivered"
                    to="Hemilton Road"
                    modeOfPayment="Paypal"
                    />
                    <DeliveryItem
                    title="Grocery"
                    buttonText="Delivered"
                    imgSrc={require("../assets/home3.png")}
                    price="5.50"
                    from="7-11 Grocery Mart"
                    type="Economy Delivery"
                    to="Hemilton Road"
                    modeOfPayment="Paypal"
                    />
                    <DeliveryItem
                    title="Courier"
                    imgSrc={require("../assets/home1.png")}
                    price="8.50"
                    type="Economy Delivery"
                    from="28 Mott Street."
                    buttonText="Delivered"
                    to="St. Merry Church"
                    modeOfPayment="Cash On Pickup"
                    />
                </ScrollView>
            </View>}
        </View>
    )
}

export default DeliveriesScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor: "#fdb916",
        flex:1
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:30
    },
    content:{
        backgroundColor:"lightgray",
        opacity:1,
        flex:1,
        borderTopLeftRadius:20,
    }
})
