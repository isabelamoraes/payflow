import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled(LinearGradient).attrs({
    colors: [theme.colors.gradientDark, theme.colors.gradientLight],
})`
    height: 184px;

    padding:24px;
    padding-top:65px;
`;

export const Content = styled.View`
    flex: 1;
    padding-left:24px;
    padding-right:24px;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const Registered = styled.View`
    height: 80px;
    background-color: ${({ theme }) => theme.colors.secondary};

    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    margin-top: -40px;
    z-index: 1;
`;

export const Line = styled.View`
    width: 1px;
    height: 32px;

    background-color: ${({ theme }) => theme.colors.background}32;

    margin-left: 24px;
    margin-right: 24px;
`;

export const TextRegistered = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(13)}px;
`;

export const TextRegisteredBold = styled.Text`
    font-family: ${({ theme }) => theme.fonts.textBold};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(13)}px;
`;

export const Empty = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(13)}px;
`;