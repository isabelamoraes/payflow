import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    margin-bottom: 16px;
`;

export const Content = styled.View`
    flex-direction: row;
`;

export const WrapperIcon = styled.View`
    flex-direction: row;
`;

export const IconContainer = styled.View`
    padding: 12px;
    padding-right: 24px;
    padding-left: 24px;
`;

export const Diviser = styled.View`
    width: 1px;
    background-color: ${({ theme }) => theme.colors.stroke};
`;

export const InputText = styled(TextInput)`
    width: 75%;
    padding-left: 24px;

    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.body};
    font-size: ${RFValue(15)}px;
`;

export const Line = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.stroke};
`;
