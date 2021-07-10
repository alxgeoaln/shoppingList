import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import colors from '../../helpers/constants';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        borderWidth: 1,
        borderColor: colors.orange,
        alignItems: 'center',
        paddingHorizontal: 15,
        marginVertical: 5,
        justifyContent: 'space-between',
        borderRadius: 5
    },
    pressable: { height: '100%', justifyContent: 'center', width: '85%' }
})

interface ListItemProps {
    button?: React.ReactNode;
    label: string;
    onPress?: () => void;
}

const ListItem = ({
    button,
    label,
    onPress
}: ListItemProps) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress} style={styles.pressable}>
                <Text>{label}</Text>
            </Pressable>
            <View>
                {button}
            </View>
        </View>
    )
};

export default ListItem;