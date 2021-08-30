import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    padding-bottom: 24px;
    margin-top: 32px;
    margin-bottom: 16px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.stroke};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.titleBold};
    color: ${({ theme }) => theme.colors.heading};
    font-size: ${RFValue(20)}px;
`;

export const Amount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.body};
    font-size: ${RFValue(13)}px;
`;
