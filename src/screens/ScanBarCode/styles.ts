import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../styles/theme';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled(LinearGradient).attrs({
    colors: [theme.colors.gradientDark, theme.colors.gradientLight],
})`
    width: 100%;
    height: 64px;

    position: absolute;
    z-index: 2;
`;

export const Footer = styled.View`
    width: 56px;
    height: 100%;

    background-color: ${({ theme }) => theme.colors.background};

    position: absolute;
    z-index: 1;

    align-items:center;
    justify-content: center;
`;

export const InsertButton = styled(TouchableOpacity)`
`;

export const TextInsertButton = styled.Text`
    width: 100%;
    transform: rotate(90deg);
    margin-top: 64px;
    
    margin-right: 56px;

    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.body};
    font-size: ${RFValue(15)}px;
`;