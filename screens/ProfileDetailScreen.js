import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from 'react-redux';

const {width, height} = Dimensions.get("window")

const ProfileDetailScreen = () => {

    const navigation = useNavigation();
    const user = useSelector((state)=>state.user.user)

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                    <AntDesign
                    name="arrowleft"
                    size={24}
                    color="white"
                    style={{alignSelf:"flex-start"}}
                    />
                </TouchableOpacity>
                <Text style={{fontSize:20, color:"white", fontWeight:"bold"}}>My Profile</Text>
            </View>
            <View style={styles.content}>
                <View style={{marginTop:"-10%",width:"80%",flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                    {user.imageUrl?
                    <Image
                    source={{uri: user.imageUrl}}
                    style={{height:100, width:100, resizeMode:"contain", borderRadius:100}}
                    />
                    :
                    <Ionicons
                    name="person-circle"
                    size={100}
                    color="gray"
                    />
                    }
                </View>
                <View style={{alignItems:"flex-start", width:"90%"}}>
                    <View style={{borderBottomColor:"gray", borderBottomWidth:1, width:"100%", marginVertical:20}}>
                        <Text style={{fontSize:20, fontWeight:"bold", color:"black"}}>Full Name</Text>
                        <Text
                        style={{fontSize:20, color:"gray", paddingVertical:10}}
                        >{user.name}</Text>
                    </View>
                    <View style={{borderBottomColor:"gray", borderBottomWidth:1, width:"100%", marginVertical:20}}>
                        <Text style={{fontSize:20, fontWeight:"bold", color:"black"}}>Email Address</Text>
                        <Text style={{fontSize:20, color:"gray", paddingVertical:10}}>{user.email}</Text>
                    </View>
                    <View style={{borderBottomColor:"gray", borderBottomWidth:1, width:"100%", marginVertical:20}}>
                        <Text style={{fontSize:20, fontWeight:"bold", color:"black"}}>Phone Number</Text>
                        <Text
                        style={{fontSize:20, color:"gray", paddingVertical:10}}>{user.number}</Text>
                    </View>
                    <View style={{borderBottomColor:"gray", borderBottomWidth:1, width:"100%", marginVertical:20}}>
                        <Text style={{fontSize:20, fontWeight:"bold", color:"black"}}>Vehicle Type</Text>
                        <Text
                        style={{fontSize:20, color:"gray", paddingVertical:10}}>{user.vehicleType}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileDetailScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"#fcb000"
    },
    header:{
        marginVertical: 30,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:30,
        width:"100%"
    },
    content:{
        backgroundColor:"white",
        alignItems:"center",
        borderTopLeftRadius:20,
        flex:1,
        padding:10,
        width:"100%"
    },
    button:{
        backgroundColor:"#fcb000",
        alignItems:"center",
        padding:20,
        width:"100%",
        borderTopLeftRadius:20,
        borderBottomRightRadius:20,
        marginVertical:15,
        position:"absolute",
        bottom:0
    },

})
