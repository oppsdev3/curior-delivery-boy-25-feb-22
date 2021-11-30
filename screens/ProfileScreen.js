import React from 'react'
import { StyleSheet, ToucTouchableOpacity, hableOpacity, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/core';


const ProfileScreen = () => {

    const user = useSelector((state)=>state.user.user); 
    const navigation = useNavigation();

    const logoutHandler=()=>{
        // navigation.navigate("SignUp")
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <Text style={{fontSize:20, color:"white", fontWeight:"bold"}}>Account</Text>
                    <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"white", borderRadius:10, padding:10}}>
                        <Text style={{fontWeight:"bold", fontSize:18, color:"#fcb000"}}>Buy this App</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                onPress={()=>navigation.navigate("ProfileDetails")}
                activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginVertical:20}}>
                    <Image
                    source={{uri: user.imageUrl}}
                    style={{height: 60, width:60, resizeMode:"contain", borderRadius:100, marginRight:10}}
                    />
                    <View style={{}}>
                        <Text style={{fontSize:23, fontWeight:"bold", color:"white"}}>{user.name}</Text>
                        <Text style={{fontSize:17, fontWeight:"bold", color:"white", marginTop:5}}>View Profile</Text>
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
                    color="#fcb000"
                    />
                    <View style={{marginLeft:20}}>
                        <Text style={{fontWeight:"bold", fontSize:25, color:"black", marginBottom:5}}>Contact Us</Text>
                        <Text style={{fontSize:16,color:"gray", fontWeight:"800"}}>Contact us for any query & issue</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"flex-start", marginVertical:20}}>
                    <Entypo
                    name="globe"
                    size={26}
                    color="#fcb000"
                    />
                    <View style={{marginLeft:20}}>
                        <Text style={{fontWeight:"bold", fontSize:25, color:"black", marginBottom:5}}>Changing Language</Text>
                        <Text style={{fontSize:16,color:"gray", fontWeight:"800"}}>Select Language</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>navigation.navigate("T&C")}
                activeOpacity={0.8} style={{flexDirection:"row", alignItems:"flex-start", marginVertical:20}}>
                    <Entypo
                    name="calendar"
                    size={26}
                    color="#fcb000"
                    />
                    <View style={{marginLeft:20}}>
                        <Text style={{fontWeight:"bold", fontSize:25, color:"black", marginBottom:5}}>Terms & Conditions</Text>
                        <Text style={{fontSize:16,color:"gray", fontWeight:"800"}}>Know our Terms & Conditions</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"flex-start", marginVertical:20}}>
                    <Entypo
                    name="share"
                    size={26}
                    color="#fcb000"
                    />
                    <View style={{marginLeft:20}}>
                        <Text style={{fontWeight:"bold", fontSize:25, color:"black", marginBottom:5}}>Share App</Text>
                        <Text style={{fontSize:16,color:"gray", fontWeight:"800"}}>Share with Friends & Family</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={logoutHandler}
                activeOpacity={0.8} style={{flexDirection:"row", alignItems:"flex-start", marginVertical:20}}>
                    <MaterialCommunityIcons
                    name="logout"
                    size={26}
                    color="#fcb000"
                    />
                    <View style={{marginLeft:20}}>
                        <Text style={{fontWeight:"bold", fontSize:25, color:"black", marginBottom:5}}>Logout</Text>
                        <Text style={{fontSize:16,color:"gray", fontWeight:"800"}}>Signout from Current Account</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#fcb000",
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
