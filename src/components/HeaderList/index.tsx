import React from 'react';

import {
    Container,
    Title,
    Amount
} from './styles';

interface Props {
    type: number;
    amount: number;
}

export function HeaderList({
    type,
    amount
}: Props){
    return(
        <Container>
            <Title>
                {type == 1 ? 'Meus boletos' : 'Meus extratos'}
            </Title>

            <Amount>
                {type == 1 ? `${amount} ao total` : `${amount} pagos`}
            </Amount>
        </Container>
    );
}