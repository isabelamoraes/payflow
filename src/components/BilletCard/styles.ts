import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity).attrs({
    activeOpacity: 0.4
})`
    width: 100%;
    padding-top: 16px;
    padding-bottom: 16px;

    flex-direction: row;
    justify-content: space-between;
`;

export const Info = styled.View``; 

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.titleBold};
    color: ${({ theme }) => theme.colors.heading};
    font-size: ${RFValue(17)}px;

    padding-bottom: 6px;
`;

export const Date = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.body};
    font-size: ${RFValue(13)}px;
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.heading};
    font-size: ${RFValue(16)}px;
`;

export const PriceBold = styled.Text`
    font-family: ${({ theme }) => theme.fonts.textBold};
    color: ${({ theme }) => theme.colors.heading};
    font-size: ${RFValue(16)}px;
`;
