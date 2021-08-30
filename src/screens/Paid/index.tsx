import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { ToastAndroid, Clipboard } from 'react-native';

import {
    Container,
    Content,
    Wrapper,
    Text,
    TextBold,
    ButtonBarCode,
    TextButtonBarCode,
    WrapperButton,
    ButtonCancel,
    TextButtonCancel,
    ButtonConfirm,
    TextButtonConfirm,
    Line,
    ButtonDelete,
    TextButtonDelete
} from './styles';

interface Billet {
    id: string;
    title: string;
    date: string;
    price: number;
    barCode: string;
    paid: boolean;
}

interface Props {
    item: Billet;
    setPaid: (id: string, paid: boolean) => void;
    deleteBillet: (id: string) => void;
}

export function Paid({
    item,
    setPaid,
    deleteBillet
}: Props) {
    const theme = useTheme();

    function handleCopy() {
        Clipboard.setString(item.barCode);

        ToastAndroid.showWithGravity(
            'Código de barras copiado para a área de transferência',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
        );
    }

    return (
        <Container>
            <Content>
                <Wrapper>
                    <Text>
                        O boleto <TextBold>{item.title}</TextBold>{'\n'} no valor de R$ <TextBold>{item.price}</TextBold>{'\n'} foi pago?
                    </Text>

                    <ButtonBarCode
                        onPress={handleCopy}
                    >
                        <TextButtonBarCode>
                            {item.barCode}
                        </TextButtonBarCode>

                        <Feather
                            name="copy"
                            color={theme.colors.body}
                            size={18}
                        />
                    </ButtonBarCode>

                    <WrapperButton>
                        <ButtonCancel onPress={() => setPaid(item.id, false)}>
                            <TextButtonCancel>
                                Ainda não
                            </TextButtonCancel>
                        </ButtonCancel>

                        <ButtonConfirm onPress={() => setPaid(item.id, true)}>
                            <TextButtonConfirm>
                                Sim
                            </TextButtonConfirm>
                        </ButtonConfirm>
                    </WrapperButton>
                </Wrapper>

                <Line />

                <ButtonDelete onPress={() => deleteBillet(item.id)}>
                    <Feather
                        name="trash-2"
                        color={theme.colors.delete}
                        size={18}
                    />

                    <TextButtonDelete>
                        Deletar boleto
                    </TextButtonDelete>
                </ButtonDelete>
            </Content>
        </Container>
    );
}