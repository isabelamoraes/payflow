import React from 'react';

import { useAuth } from '../../hooks/auth';

import {
    Container,
    Info,
    Title,
    TitleBold,
    Subtitle,
    Avatar
} from './styles';

export function HeaderInfo(){
    const { user } = useAuth();

    return(
        <Container>
            <Info>
                <Title>
                    Olá, <TitleBold>{user.username}</TitleBold>
                </Title>
                <Subtitle>
                    Mantenha suas contas em dia
                </Subtitle>
            </Info>

            <Avatar 
                source={{ uri: user.avatar }}
            />
        </Container>
    );
}