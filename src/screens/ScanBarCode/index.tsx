import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import {
    Container,
    Header,
    Footer,
    InsertButton,
    TextInsertButton
} from './styles';

export function ScanBarCode({ navigation }: any) {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted' ? true : false);
        })();
    }, []);

    const handleBarCodeScanned = ({ data }: any) => {
        setScanned(true);
        navigation.navigate('RegisterBillet', {barCodeScan: data});
    };

    if (hasPermission === false) {
        Alert.alert('Sem acesso à câmera');
    }

    function handleRegister() {
        navigation.navigate('RegisterBillet', {barCodeScan:''});
    }

    return (
        <Container>
            <Header />

            <BarCodeScanner style={{ width: '120%', height: '120%' }}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            />

            <Footer>
                <InsertButton onPress={handleRegister}>
                    <TextInsertButton>Inserir código do boleto</TextInsertButton>
                </InsertButton>
            </Footer>
        </Container>
    );
}