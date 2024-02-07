// aqui serao as rotas para o usuario logado, serao do tipo TAB

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const tab = createBottomTabNavigator();


const LoggedRouts = () =>{

    return(

        <tab.Navigator>

       <Text>OLA</Text>

        </tab.Navigator>
    )
}


export default LoggedRouts;