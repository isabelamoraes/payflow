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
    height: 152px;

    padding:24px;
    padding-top:65px;
`;

export const Content = styled.View`
    flex: 1;
    padding-left:24px;
    padding-right:24px;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const Empty = styled.Text`
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(13)}px;
`;