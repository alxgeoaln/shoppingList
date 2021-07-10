import React from 'react';
import { View, TextInput, StyleSheet, ReturnKeyType } from 'react-native';
import colors from '../../helpers/constants'

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: colors.lightBlue,
        borderRadius: 15,
        paddingHorizontal: 10
    }
})

interface InputProps {
    onChange: (value: string) => void;
    value: string;
    placeholder?: string;
    style?: object;
    returnKeyType?: ReturnKeyType;
    editable?: boolean;
    onSubmitEditing?: () => void;
}

const Input = ({
    onChange,
    value,
    placeholder,
    style,
    returnKeyType,
    editable,
    onSubmitEditing
}: InputProps) => {
    return (
        <View>
            <TextInput
                onSubmitEditing={onSubmitEditing}
                editable={editable}
                returnKeyType={returnKeyType}
                placeholder={placeholder}
                onChangeText={onChange}
                value={value}
                style={{ ...styles.input, ...style }}
            />

        </View>
    )
};

export default Input;