import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../styles/theme';
import { TouchableOpacity } from 'react-native';

export const Container = styled(LinearGradient).attrs({
    colors: ['#FFFFFF00', '#FFFFFF80', theme.colors.background],
    locations: [0.0, 0.2, 0.6]
})`
    width: 100%;
    height: 120px;

    position: absolute;
    z-index: 1;
    bottom: 0;

    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    padding-bottom: 24px;
`;

export const ButtonAdd = styled(TouchableOpacity).attrs({
    activeOpacity: 0.6
})`
    width: 56px;
    height: 56px;
    background-color: ${({ theme }) => theme.colors.primary};

    border-radius: 5px;

    justify-content: center;
    align-items: center;

    margin-left: 48px;
    margin-right: 48px;
`;

export const ButtonItem = styled(TouchableOpacity).attrs({
    activeOpacity: 0.4
})`
    padding: 8px;
`;