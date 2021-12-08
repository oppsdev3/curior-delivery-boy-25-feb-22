import { useNavigation, useRoute } from '@react-navigation/core';
import React, {useState} from 'react'
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import { RalewayBold, RalewaySemiBold } from '../components/fonts';

const {width, height} = Dimensions.get("window")

const VerificationScreen = () => {

    const navigation = useNavigation();
    const [code, setCode] = useState("");
    const route = useRoute();

    const submitHandler=()=>{
        navigation.navigate("Custom")
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <View style={{alignItems:"center",flexDirection:"row",justifyContent:"space-between",marginBottom:20}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                        <AntDesign
                        name="arrowleft"
                        size={24}
                        color="white"
                        style={{alignSelf:"flex-start"}}
                        />
                    </TouchableOpacity>
                    <Text style={{fontSize:20, color:"white", fontFamily:RalewayBold}}>Verification</Text>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:20, color:"white", fontFamily:RalewaySemiBold}} numberOfLines={2}>Enter 6 digit verification code sent on {route.params.email}</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <Text style={{fontSize:20, color:"white", fontFamily:RalewaySemiBold}}>2:23 min</Text>
                    <TouchableOpacity style={{borderRadius:10, elevation:5, backgroundColor:"whitesmoke", padding:10}} activeOpacity={0.8}>
                        <Text style={{fontSize:20, color:"#fdb916", fontFamily:RalewayBold}}>Resend Code</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                <View style={{alignItems:"flex-start", width:"90%", marginVertical:20}}>
                    <View style={{borderBottomColor:"gray", borderBottomWidth:1, width:"100%"}}>
                        <Text style={{fontSize:20, fontFamily:RalewayBold, color:"black"}}>Enter Verification Code</Text>
                        <TextInput
                        placeholderTextColor="gray"
                        placeholder="Enter 6 Digits Verification Code"
                        value={code}
                        onChangeText={(text)=>setCode(text)}
                        keyboardType="number-pad"
                        style={{fontSize:20, color:"black", fontFamily:RalewaySemiBold}}
                        />
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.button}
                onPress={submitHandler}>
                    <Text style={{fontSize:20, color:"white", fontFamily:RalewaySemiBold}}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default VerificationScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"#fdb916"
    },
    header:{
        marginVertical: 20,
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
        backgroundColor:"#fdb916",
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
