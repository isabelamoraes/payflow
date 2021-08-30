import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: #00000050;

    justify-content: flex-end;
`;

export const Content = styled.View`
    width: 100%;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;

    background-color: ${({ theme }) => theme.colors.background};

    z-index: 1;

    height: 380px;
`;

export const Wrapper = styled.View`
    padding: 24px;
`;

export const Text = styled.Text`
    margin-top: 14px;

    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.heading};
    font-size: ${RFValue(20)}px;

    text-align: center;
`;

export const TextBold = styled.Text`
    font-family: ${({ theme }) => theme.fonts.titleBold};
    color: ${({ theme }) => theme.colors.heading};
    font-size: ${RFValue(20)}px;
`;

export const ButtonBarCode = styled(TouchableOpacity).attrs({
    activeOpacity: 0.6
})`
    height: 48px;
    background-color: ${({ theme }) => theme.colors.stroke};
    border-radius: 5px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-left: 24px;
    padding-right: 24px;

    margin-top: 24px;
    margin-bottom: 24px;
`;

export const TextButtonBarCode = styled.Text.attrs({
    numberOfLines: 1
})`
    width: 80%;
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.body};
    font-size: ${RFValue(15)}px;
`;

export const WrapperButton = styled.View`
    flex-direction: row;
    
    justify-content: space-around;
`;

export const ButtonCancel = styled(TouchableOpacity).attrs({
    activeOpacity: 0.4
})`
    width: 48%;
    height: 55px;
    background-color: ${({ theme }) => theme.colors.boxes};
    border-radius: 5px;

    border: 1px solid ${({ theme }) => theme.colors.stroke};
    
    align-items: center;
    justify-content: center;
`;

export const TextButtonCancel = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.body};
    font-size: ${RFValue(15)}px;
`;

export const ButtonConfirm = styled(TouchableOpacity).attrs({
    activeOpacity: 0.6
})`
    width: 48%;
    height: 55px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;

    align-items: center;
    justify-content: center;
`;

export const TextButtonConfirm = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(15)}px;
`;

export const Line = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.stroke};

    margin-bottom: 24px;
`;

export const ButtonDelete = styled(TouchableOpacity).attrs({
    activeOpacity: 0.4
})`
    flex-direction: row;

    justify-content: center;
    align-items: center;
`;

export const TextButtonDelete = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.delete};
    font-size: ${RFValue(15)}px;

    margin-left: 16px;
`;
