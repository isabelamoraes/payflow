import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled(LinearGradient).attrs({
    colors: [theme.colors.gradientDark, theme.colors.gradientLight],
})`
    height: 316px;
`;

export const Image = styled.Image`
    width: 258px;
    height: 441px;
    
    align-self: center;

    margin-top: -249px;
    z-index: 1;
`;

export const Title = styled.Text`
    align-self: center;
    text-align: center;

    font-family: ${({ theme }) => theme.fonts.titleBold};
    font-size: ${RFValue(32)}px;
    color: ${({ theme }) => theme.colors.heading};

    margin-top: 24px;
    margin-bottom: 40px;
`;

export const SocialButton = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.colors.boxes};
    border: 1px solid ${({ theme }) => theme.colors.stroke};

    width: 295px;
    height: 56px;

    align-self: center;
    align-items: center;
    justify-content: center;

    flex-direction: row;
    
`;

export const IconButton = styled.View`
    width: 56px;
    height: 56px;

    align-items: center;
    justify-content: center;

    border-right-width: 1px;
    border-right-color: ${({ theme }) => theme.colors.stroke};
`;

export const TextButton = styled.Text`
    width: 239px;
    text-align: center;

    font-family: ${({ theme }) => theme.fonts.text};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.body}
`;
