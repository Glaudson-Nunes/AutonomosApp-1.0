import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginApp from "../Pages/Login";
import CreateAccountApp from "../Pages/createAcconut";
import ReserPasswordApp from "../Pages/ResetPassword";

const Stack = createNativeStackNavigator();


const LoggedOut = () =>{

    return(

        <Stack.Navigator>

        <Stack.Screen name = "Login" component={LoginApp} options={{headerShown: false}}/>
        <Stack.Screen name = "createAccount" component={CreateAccountApp} options={{headerShown: false}} />
        <Stack.Screen name = "ResertPassword" component={ReserPasswordApp} options={{headerShown: false}} />

        </Stack.Navigator>
    )
}


export default LoggedOut;