import React, { useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { useRoute } from '@react-navigation/native';

import { Input } from '../../components/Input';

import { useAuth } from '../../hooks/auth';

import {
    Container,
    BackButton,
    Title,
    Form,
    Footer,
    Line,
    FooterWrapper,
    Diviser,
    ButtonCancel,
    TextButtonCancel,
    ButtonRegister,
    TextButtonRegister
} from './styles';

interface Params {
	barCodeScan: string;
}

export function RegisterBillet({ navigation }: any) {
    const theme = useTheme();
    const { user } = useAuth();
    const routes = useRoute();

    const {barCodeScan} = routes.params as Params;

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [barCode, setBarCode] = useState(barCodeScan);

    function formattedDate(date: string){
        let formatted = date.replace(/^(\d{2})(\d{2})(\d{4}).*/,"$1/$2/$3");
        setDate(formatted);
    }

    async function handleRegister() {
        try {

            const schema = Yup.object().shape({
                barCode: Yup.string()
                    .required('O código de barras é obrigatório!'),
                price: Yup.string()
                    .required('O valor do boleto é obrigatório!'),
                date: Yup.string()
                    .required('A data de vencimento do boleto é obrigatória!'),
                title: Yup.string()
                    .required('O nome do boleto é obrigatório'),
            });

            const data = { title, date, price, barCode }
            await schema.validate(data);

            const newBillet = {
                id: String(uuid.v4()),
                title,
                date,
                price,
                barCode,
                paid: false
            }

            const dataKey = `@payflow:billets_user:${user.id}`;

            const dataStorage = await AsyncStorage.getItem(dataKey);
            const currentData = dataStorage ? JSON.parse(dataStorage) : [];

            const dataFormatted = [
                ...currentData,
                newBillet
            ];

            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

            navigation.navigate('Home')

        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                Alert.alert('Atenção', error.message);
            } else {
                Alert.alert('Não foi possível cadastrar o boleto');
                console.log(error)
            }
        }
    }

    function handleCancel(){
        navigation.navigate('Home')
    }

    return (
        <Container>
            <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor="transparent"
            />

            <BackButton
                onPress={() => navigation.goBack()}
            >
                <Feather
                    name="arrow-left"
                    color={theme.colors.inputs}
                    size={24}
                />
            </BackButton>

            <Title>
                Preecha os dados{'\n'}do boleto
            </Title>

            <Form>
                <Input
                    iconName="file-document-outline"
                    autoCorrect={false}
                    keyboardType="default"
                    placeholder="Nome do boleto"
                    autoCapitalize="words"
                    value={title}
                    onChangeText={setTitle}
                />

                <Input
                    iconName="calendar-month-outline"
                    autoCorrect={false}
                    keyboardType="numeric"
                    placeholder="Vencimento"
                    value={date}
                    onChangeText={formattedDate}   
                    maxLength={10}                 
                />

                <Input
                    iconName="currency-usd"
                    autoCorrect={false}
                    keyboardType="numeric"
                    placeholder="Valor"
                    value={price}
                    onChangeText={setPrice}
                />

                <Input
                    iconName="barcode"
                    autoCorrect={false}
                    keyboardType="numeric"
                    placeholder="Código"
                    value={barCode}
                    onChangeText={setBarCode}
                />
            </Form>

            <Footer>
                <Line />

                <FooterWrapper>
                    <ButtonCancel
                        onPress={handleCancel}
                    >
                        <TextButtonCancel>
                            Cancelar
                        </TextButtonCancel>
                    </ButtonCancel>

                    <Diviser />

                    <ButtonRegister
                        onPress={handleRegister}
                    >
                        <TextButtonRegister>
                            Cadastrar
                        </TextButtonRegister>
                    </ButtonRegister>
                </FooterWrapper>
            </Footer>
        </Container>
    );
}