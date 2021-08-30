import React from 'react';
import { TextInputProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
    Container,
    Content,
    WrapperIcon,
    IconContainer,
    Diviser,
    InputText,
    Line
} from './styles';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
}

export function Input({ iconName, ...rest }: Props) {
    const theme = useTheme();

    return (
        <Container>
            <Content>
                <WrapperIcon>
                    <IconContainer>
                        <MaterialCommunityIcons
                            name={iconName}
                            size={24}
                            color={theme.colors.primary}
                        />
                    </IconContainer>

                    <Diviser />
                </WrapperIcon>

                <InputText
                    placeholderTextColor={theme.colors.inputs}
                    {...rest}
                />
            </Content>

            <Line />
        </Container>
    );
}