import React, { useCallback, useState } from 'react';
import { StatusBar, FlatList, Modal } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { HeaderInfo } from '../../components/HeaderInfo';
import { HeaderList } from '../../components/HeaderList';
import { BilletCard } from '../../components/BilletCard';
import { Toolbar } from '../../components/Toolbar';

import { Paid } from '../Paid';

import {
    Container,
    Header,
    Content,
    Empty
} from './styles';

import { useAuth } from '../../hooks/auth';

interface Billet {
    id: string;
    title: string;
    date: string;
    price: number;
    barCode: string;
    paid: boolean;
}

export function Extract({ navigation }: any) {
    const { user } = useAuth();

    const dataKey = `@payflow:billets_user:${user.id}`;

    const [paidModalOpen, setPaidModalOpen] = useState(false);
    const [dataPaid, setDataPaid] = useState({} as Billet);
    const [data, setData] = useState<Billet[]>([]);
    const [dataFormatted, setDataFormatted] = useState<Billet[]>([]);
    const [amount, setAmount] = useState(0);

    async function loadData() {

        const dataStorage = await AsyncStorage.getItem(dataKey);
        const currentData = dataStorage ? JSON.parse(dataStorage) : [];

        setData(currentData);
        const formatData: Billet[] = currentData
            .map((item: Billet) => {

                const price = Number(item.price).toLocaleString('pt-BR', {
                    style: 'decimal',
                    minimumFractionDigits: 2
                });

                return {
                    id: item.id,
                    title: item.title,
                    date: item.date,
                    price,
                    barCode: item.barCode,
                    paid: item.paid
                }
            });

        const dataFilter = formatData.filter(
            billet => billet.paid === true
        )

        setDataFormatted(dataFilter as any as Billet[]);

        setAmount(dataFilter.length);
    }

    function handleOpenModal(item: Billet) {
        setDataPaid(item)
        setPaidModalOpen(true);
    }

    async function handleSetPaid(id: string, paid: boolean) {
        const updateData = [...data];

        data.map((item, index) => {
            if (item.id == id) {
                updateData[index].paid = paid;
            }
        });

        await AsyncStorage.setItem(dataKey, JSON.stringify(updateData));
        loadData();
        setPaidModalOpen(false);
    }

    async function handleDeleteBillet(id: string) {

        const updateData = data.filter(
            billet => billet.id != id
        )

        await AsyncStorage.setItem(dataKey, JSON.stringify(updateData));
        loadData();
        setPaidModalOpen(false);
    }

    useFocusEffect(useCallback(() => {
        loadData();
    }, []))

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />

            <Header>
                <HeaderInfo />
            </Header>

            <Content>

                <HeaderList
                    type={2}
                    amount={amount}
                />

                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: getBottomSpace() + 100
                    }}
                    data={dataFormatted}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <BilletCard
                            item={item}
                            onPress={handleOpenModal}
                        />
                    }
                    ListEmptyComponent={(
                        <Empty>Nenhum boleto cadastrado</Empty>
                    )}
                />
            </Content>

            <Toolbar
                type={2}
                navigation={navigation}
            />

            <Modal
                visible={paidModalOpen}
                transparent
                statusBarTranslucent
                animationType="fade"
            >
                <Paid
                    item={dataPaid}
                    setPaid={handleSetPaid}
                    deleteBillet={handleDeleteBillet}
                />
            </Modal>
        </Container>
    );
}