import React from 'react';
import { useAuth } from '../../hooks/auth';
import { Alert } from 'react-native';

import {
    Container,
    Header,
    Image,
    Title,
    SocialButton,
    IconButton,
    TextButton
} from './styles';

import signInImage from '../../assets/signIn.png';
import GoogleSVG from '../../assets/google.svg';

export function SignIn(){
    const { signIn } = useAuth();

    async function handleSign() {
        try {
            return await signIn();
        } catch(error) {
            Alert.alert('Não foi possível conectar a conta Google');
            console.log(error)
        }        
    }

    return(
        <Container>
            <Header />

            <Image source={signInImage}/>

            <Title>
                Organize seus
                {'\n'}boletos em um
                {'\n'}só lugar
            </Title>

            <SocialButton
                activeOpacity={.5}
                onPress={handleSign}
            >
                <IconButton>
                    <GoogleSVG />
                </IconButton>

                <TextButton>
                    Entrar com Google
                </TextButton>
            </SocialButton>
        </Container>
    );
}