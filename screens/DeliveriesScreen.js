import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux';
import DeliveredItem from '../components/DeliveredItem';
import DeliveryItem from '../components/DeliveryItem';
import { RalewayBold, RalewaySemiBold } from '../components/fonts';

const DeliveriesScreen = () => {

    const [click, setClick] = useState("New Deliveries");
    const deliverd = useSelector((state)=>state.product.product); 
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("https://delivery-boy-api.herokuapp.com/api/product")
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>console.log(err))
    },[data])

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
                    {data.map((item)=>(
                        <DeliveryItem
                        key={item._id}
                        id={item._id}
                        deliveryaccepted={item.deliveryaccepted}
                        title={item.category}
                        imgSrc={item.image}
                        deliveryitem={item.deliveryitem}
                        to={item.addresstodeli}
                        pickedStatus={item.pickedStatus}
                        deliveryStatus={item.deliveredStatus}
                        modeOfPayment={item.paymentMode}
                        CourierType={item.CourierType}
                        CourierInfo={item.CourierInfo}
                        Frangible={item.Frangible}
                        sendingAddress={item.sendingAddress}
                        Price={item.Price}
                        serviceType={item.serviceType}
                        />
                    ))}
                </ScrollView>
            </View>
            :
            <View style={styles.content}>
                <Text style={{fontSize:18, color:"gray", padding:20, fontFamily:RalewaySemiBold}}>Past Deliveries</Text>
                {(deliverd.length!==0) ? 
                <ScrollView showsVerticalScrollIndicator={false}>
                    {deliverd.map((item)=>(
                        <DeliveredItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        Price={item.Price}
                        sendingAddress={item.sendingAddress}
                        serviceType={item.serviceType}
                        CourierType={item.CourierType}
                        CourierInfo={item.CourierInfo}
                        Frangible={item.Frangible}
                        to={item.to}
                        modeOfPayment={item.modeOfPayment}
                        />
                    ))}
                </ScrollView>
                :
                <Text style={{fontFamily:RalewayBold, fontSize:20, color:"black", textAlign:"center", marginTop:100}}>Sorry, No Order Delivered:(</Text>
                }
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
