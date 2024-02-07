import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
const App = () =>{

  return(

    <NavigationContainer>

      <StatusBar backgroundColor="#36393F" barStyle='light-content' translucent={false}/>
      <Routes/>

    </NavigationContainer>

    
  )
}


export default App;