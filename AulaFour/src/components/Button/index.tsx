import React from 'react';
import { Button } from 'react-native';

interface IButtonProps {
    title: string;
    funcao(): void;
}

const ButtonComponent: React.FC<IButtonProps> = ({title, funcao}) => (
    <Button title={title} onPress={funcao} />
)

export default ButtonComponent;