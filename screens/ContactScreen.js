import React, {useState} from 'react'
import { StyleSheet,View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import { useSelector } from 'react-redux'
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/core';
import { RalewayBold, RalewayRegular, RalewaySemiBold } from '../components/fonts';


const ContactScreen = () => {

    const navigation = useNavigation();
    const user = useSelector((state)=>state.user.user);
    const [message, setMessaage] = useState(""); 
    const [headline, setHeadline] = useState(false);

    const submitHandler=()=>{
        setHeadline(true);
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                    <AntDesign
                    name="arrowleft"
                    size={24}
                    color="white"
                    />
                </TouchableOpacity>
                <Text style={{fontFamily:RalewayBold, fontSize:24, color:"white", marginTop:10}}>Contact Us</Text>
            </View>
            <View style={styles.content}>
                <Text style={{fontSize:20, fontFamily:RalewaySemiBold, color:"black", marginBottom:20}}>Let us know your feedback, queries or issue regarding app or features.</Text>
                <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:70}}>
                    <View style={{borderBottomColor:"gray", borderBottomWidth:1, width:"100%"}}>
                        <Text style={{fontSize:20, fontFamily:RalewayBold, color:"black"}}>Full Name</Text>
                        <Text
                        style={{fontSize:20, color:"gray", fontFamily:RalewayRegular, paddingVertical:10}}
                        >{user.name}</Text>
                    </View>
                    <View style={{borderBottomColor:"gray", borderBottomWidth:1, width:"100%", marginVertical:20}}>
                        <Text style={{fontSize:20, fontFamily:RalewayBold, color:"black"}}>Phone Number</Text>
                        <Text
                        style={{fontSize:20, color:"gray", fontFamily:RalewayRegular, paddingVertical:10}}
                        >{user.number}</Text>
                    </View>
                    <View style={{borderBottomColor:"gray", borderBottomWidth:1, width:"100%", marginVertical:10}}>
                        <Text style={{fontSize:20, fontFamily:RalewayBold, color:"black"}}>Your Message</Text>
                        <TextInput
                        placeholderTextColor="gray"
                        placeholder="Enter your message"
                        value={message}
                        onChangeText={(text)=>setMessaage(text)}
                        keyboardType="default"
                        style={{fontSize:20, color:"black", fontFamily:RalewayRegular}}
                        />
                    </View>
                    {headline && 
                    <View style={{marginVertical:20}}>
                        <Text style={{color:"red", fontFamily:RalewayRegular, fontSize:15, textAlign:"center"}}>Hello {user.name}! We got your message and we would be getting back to you ASAP!</Text>
                    </View>}
                </ScrollView>
                <TouchableOpacity activeOpacity={0.8} style={styles.button}
                onPress={submitHandler}>
                    <Text style={{fontSize:20, color:"white", fontFamily:RalewaySemiBold}}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ContactScreen

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
        bottom:0,
        alignSelf:"center"
    },
})
