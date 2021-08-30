import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;

    background: ${({ theme }) => theme.colors.background};
`;

export const BackButton = styled(TouchableOpacity).attrs({
    activeOpacity: 0.4
})`
    margin-left:14px;
    margin-top:55px;
    margin-bottom: 14px;

    padding: 10px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.titleBold};
    color: ${({ theme }) => theme.colors.heading};
    font-size: ${RFValue(20)}px;

    text-align: center;
`;

export const Form = styled.View`
    padding: 24px;
`;

export const Footer = styled.View`
    width: 100%;

    position: absolute;
    bottom: 0;
`;

export const Line = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.stroke};
`;

export const FooterWrapper = styled.View`
    flex-direction: row;

    justify-content: space-around;
`;

export const Diviser = styled.View`
    width: 1px;
    background-color: ${({ theme }) => theme.colors.stroke};
`;

export const ButtonCancel = styled(TouchableOpacity).attrs({
    activeOpacity: 0.4
})`
    padding: 24px;
`;

export const TextButtonCancel = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.body};
    font-size: ${RFValue(15)}px;
`;

export const ButtonRegister = styled(TouchableOpacity).attrs({
    activeOpacity: 0.4
})`
    padding: 24px;
`;

export const TextButtonRegister = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(15)}px;
`;
