import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

import colors from '../../helpers/constants';

const styles = StyleSheet.create({
    button: { backgroundColor: colors.orange, alignItems: 'center', justifyContent: 'center', width: 80, height: 50, borderRadius: 30 },
    text: { fontWeight: 'bold', color: colors.white },
})

export interface ButtonProps {
    onPress: () => void;
    color?: string;
    label: string;
    style?: object
}

const Button = ({
    onPress,
    color = colors.orange,
    label,
    style
}: ButtonProps) => (
    <Pressable onPress={onPress} style={{...styles.button, backgroundColor: color, ...style}}>
        <Text style={styles.text}>{label}</Text>
    </Pressable>
)

export default Button;