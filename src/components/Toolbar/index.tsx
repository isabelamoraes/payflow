import React from 'react';

import {
    Container,
    ButtonAdd,
    ButtonItem
} from './styles';

import AddBoxSVG from '../../assets/add-box.svg';
import HomeSVG from '../../assets/home.svg';
import HomeLineSVG from '../../assets/home-line.svg';
import FileSVG from '../../assets/file-list.svg';
import FileLineSVG from '../../assets/file-list-line.svg';

interface Props {
    type: number;
    navigation: any;
}

export function Toolbar({ type, navigation }: Props) {

    function handleHome() {
        navigation.goBack();
    }

    function handleExtract() {
        navigation.navigate('Extract');
    }

    function handleAdd(){
        navigation.navigate('ScanBarCode');
    }

    return (
        <Container>
            <ButtonItem
                disabled={type == 1 ? true : false}
                onPress={handleHome}
            >
                {type == 1 ? <HomeSVG /> : <HomeLineSVG />}
            </ButtonItem>

            <ButtonAdd
                onPress={handleAdd}
            >
                <AddBoxSVG />
            </ButtonAdd>

            <ButtonItem
                disabled={type == 2 ? true : false}
                onPress={handleExtract}
            >
                {type == 2 ? <FileSVG /> : <FileLineSVG />}
            </ButtonItem>
        </Container>
    );
}