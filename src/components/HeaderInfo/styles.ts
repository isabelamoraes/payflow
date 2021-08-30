import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
`;

export const Info = styled.View``;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(20)}px;
`;

export const TitleBold = styled.Text`
    font-family: ${({ theme }) => theme.fonts.titleBold};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(20)}px;
`;

export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.boxes};
    font-size: ${RFValue(13)}px;
`;

export const Avatar = styled.Image`
    width: 48px;
    height: 48px;

    border-radius: 5px;
`;
