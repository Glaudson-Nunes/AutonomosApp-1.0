import styled from 'styled-components/native'


export const ViewContainer = styled.SafeAreaView`

flex: 1;
align-items: center;
justify-content: center;
background-color: #FFFFFFFF;
padding: 5px;

`


export const ViweHeader = styled.View`

flex: 1;
align-items: center;
justify-content: center;
flex-direction: column;

`


export const ViewInputs = styled.View`

flex: 1;
width: 100%;
align-items: center;
justify-content: center;
gap: 25px;

`

export const Input = styled.TextInput`

width: 90%;
padding: 10px;
color: black;
border-radius: 10px;
padding-left: 10px;
border-width: 1px;
border-color: #77838F;

`

export const Button = styled.TouchableOpacity`

width: 90%;
padding:10px;
border-radius: 10px;
background-color:#0080ED;
align-items: center;
justify-content: center;

`

export const ButtonText = styled.Text`

color: #FFFFFF;
font-size: 14px;
text-align: center;
font-weight: 600;

`

export const ButtonLink = styled.TouchableOpacity`

width: 40%;
align-items: center;
justify-content: center;
border-bottom-width: 1.5px;
border-bottom-color: #6D7278;
`

export const TextSmall = styled.Text`

color:#6D7278;
font-size: 14px;
text-align: center;
font-weight: normal;


`

export const TextBig = styled.Text`

color:#6D7278;
font-size: 20px;
text-align: center;
font-weight: 700;
`

export const TextCopyright = styled.Text`

color:#6D7278;
font-size: 12px;
text-align: center;

`

export const Logo = styled.Image`

    width: 360px;
    height: 255px;

`

export const ViewOpcoes = styled.View`

    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 20px;

`
