import React from 'react';

import {
    Container,
    Info,
    Title,
    Date,
    Price,
    PriceBold
} from './styles';

interface Billet {
    id: string;
    title: string;
    date: string;
    price: number;
    barCode: string;
    paid: boolean;
}

interface Props{
    item: Billet;
    onPress: (item: Billet) => void;
}

export function BilletCard({ item, onPress }: Props) {
    return (
        <Container onPress={() => onPress(item)}>
            <Info>
                <Title>{item.title}</Title>
                <Date>{item.date}</Date>
            </Info>

            <Price>R$ <PriceBold>{item.price}</PriceBold></Price>
        </Container>
    );
}