import React from 'react'
import { StyleSheet,View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/core';
import { RalewayBold, RalewayRegular, RalewaySemiBold } from '../components/fonts';


const TermsAndConditions = () => {

    const navigation = useNavigation();

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
                <Text style={{fontFamily:RalewaySemiBold, fontSize:24, color:"white", marginTop:10}}>Terms & Conditions</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                <Text style={{fontSize:25, fontFamily:RalewayBold,color:"black", marginBottom:20}}>Company Privacy Policy</Text>
                <Text style={{fontSize:18,fontFamily:RalewayRegular, color:"black"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                <Text style={{fontSize:18,fontFamily:RalewayRegular, color:"black", marginVertical:20}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </ScrollView>
        </View>
    )
}

export default TermsAndConditions

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
    },
})
