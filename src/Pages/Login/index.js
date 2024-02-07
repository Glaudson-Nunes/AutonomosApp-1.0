import React, { useState } from "react";
import {ScrollView, ActivityIndicator} from 'react-native';
import {

ViewContainer,
ViweHeader,
ViewInputs,
Input,
Button,
ButtonLink,
TextSmall,
TextBig,
TextCopyright,
Logo,
ButtonText,
ViewOpcoes

} from "../Login/style";


const LoginApp = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loadingAuth, setLoadingAuth] = useState(false);


    return(

        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <ViewContainer>

            <ViweHeader>

            <Logo source ={require('../../imgs/logo.png')} />

            </ViweHeader>

            <ViewInputs>

                <Input 
                placeholder = "E-mail"
                placeholderTextColor = '#77838F'
                value = {email}
                onChangeText = {(txt)=> setEmail(txt)}
                />

                <Input 
                placeholder = "Senha"
                placeholderTextColor = '#77838F'
                value = {password}
                onChangeText = {(txt)=> setPassword(txt)}
                />

                <Button>    

                {
                loadingAuth ? (

                    <ActivityIndicator size={23} color='white'/>

                ) :(

                    <ButtonText>Entrar</ButtonText>
                )
                        }


                </Button>

            </ViewInputs>

            <ViewOpcoes>
                    
                <ButtonLink>
                    <TextSmall>Criar Nova Conta</TextSmall>
                </ButtonLink>

                <ButtonLink>
                    <TextSmall>Esqueceu a Senha?</TextSmall>
                </ButtonLink>

            </ViewOpcoes>

        </ViewContainer>

        </ScrollView>
     
    )
}


export default LoginApp;