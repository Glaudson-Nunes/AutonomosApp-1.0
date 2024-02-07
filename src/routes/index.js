import React,{useState} from "react";
import { View, Text, ActivityIndicator } from "react-native";


import LoggedOut from "./loggedOut.app";
import LoggedRouts from "./Logged.app";



const Routes =()=>{

    const signed = false //logado
    const loading = false

    if(loading){

        return(

            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><ActivityIndicator size={50} style={{color: 'blue'}}></ActivityIndicator></View>

        )
    }

    return(

        signed ? <LoggedRouts />  : <LoggedOut/>
        
    )
}


export default Routes;