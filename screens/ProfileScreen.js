import React from 'react'
import { StyleSheet, ToucTouchableOpacity, hableOpacity, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/core';
import { RalewayBold, RalewayLight, RalewayRegular, RalewaySemiBold } from '../components/fonts';
import { useDispatch } from 'react-redux';
import { remove_user } from '../redux/userAction';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ProfileScreen = () => {

    const user = useSelector((state)=>state.user.user); 
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const logoutHandler=async()=>{
        dispatch(remove_user());
        await AsyncStorage.removeItem("token");
        navigation.replace("Language");
        console.log(user)
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize:22, color:"white", fontFamily: RalewaySemiBold}}>Account</Text>
                </View>
                <TouchableOpacity 
                onPress={()=>navigation.navigate("ProfileDetails")}
                activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginVertical:20}}>
                    {user.imageUrl ? 
                    <Image
                    source={{uri: user.imageUrl}}
                    style={{height: 60, width:60, resizeMode:"contain", borderRadius:100, marginRight:10}}
                    />
                    :
                    <Ionicons
                    name="person-circle-outline"
                    size={60}
                    color="white"
                    />
                    }
                    <View style={{marginLeft:10, marginTop:-10}}>
                        <Text style={{fontSize:23, color:"white", fontFamily:RalewaySemiBold}}>{user.name}</Text>
                        <Text style={{fontSize:17, color:"white", marginTop:5, fontFamily:RalewaySemiBold}}>View Profile</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                <TouchableOpacity 
                onPress={()=>navigation.navigate("Contact")}
                activeOpacity={0.8} style={{flexDirection:"row", alignItems:"flex-start", marginVertical:20}}>
                    <FontAwesome
                    name="envelope"
                    size={26}
                    color="#fdb916"
                    />
                    <View style={{marginLeft:20, marginTop:-10}}>
                        <Text style={{fontSize:25, color:"black", marginBottom:5, fontFamily:RalewayBold}}>Contact Us</Text>
                        <Text style={{fontSize:16,color:"lightgray", fontFamily:RalewaySemiBold}}>Contact us for any query & issue</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigation.navigate("Update Language")}
                activeOpacity={0.8} style={{flexDirection:"row", alignItems:"flex-start", marginVertical:20}}>
                    <Entypo
                    name="globe"
                    size={26}
                    color="#fdb916"
                    />
                    <View style={{marginLeft:20, marginTop:-10}}>
                        <Text style={{fontSize:25, color:"black", marginBottom:5, fontFamily:RalewayBold}}>Changing Language</Text>
                        <Text style={{fontSize:16,color:"lightgray", fontFamily:RalewaySemiBold}}>Select Language</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>navigation.navigate("T&C")}
                activeOpacity={0.8} style={{flexDirection:"row", alignItems:"flex-start", marginVertical:20}}>
                    <Entypo
                    name="calendar"
                    size={26}
                    color="#fdb916"
                    />
                    <View style={{marginLeft:20, marginTop:-10}}>
                        <Text style={{fontSize:25, color:"black", marginBottom:5, fontFamily:RalewayBold}}>Terms & Conditions</Text>
                        <Text style={{fontSize:16,color:"lightgray", fontFamily:RalewaySemiBold}}>Know our Terms & Conditions</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"flex-start", marginVertical:20}}>
                    <Entypo
                    name="share"
                    size={26}
                    color="#fdb916"
                    />
                    <View style={{marginLeft:20, marginTop:-10}}>
                        <Text style={{fontSize:25, color:"black", marginBottom:5, fontFamily:RalewayBold}}>Share App</Text>
                        <Text style={{fontSize:16,color:"lightgray", fontFamily:RalewaySemiBold}}>Share with Friends & Family</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={logoutHandler}
                activeOpacity={0.8} style={{flexDirection:"row", alignItems:"flex-start", marginVertical:20}}>
                    <MaterialCommunityIcons
                    name="logout"
                    size={26}
                    color="#fdb916"
                    />
                    <View style={{marginLeft:20, marginTop:-10}}>
                        <Text style={{fontFamily:RalewayBold, fontSize:25, color:"black", marginBottom:5}}>Logout</Text>
                        <Text style={{fontSize:16,color:"lightgray", fontFamily:RalewaySemiBold}}>Signout from Current Account</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#fdb916",
        flex:1
    },
    header:{
        padding:20
    },
    content:{
        backgroundColor:"white",
        borderTopLeftRadius:20,
        flex:1,
        padding:20,
        paddingHorizontal:30
    }
})
