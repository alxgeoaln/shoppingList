import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import AddButton from '../AddButton';

import colors, { shoppingListActive, shoppingList, archiveActive, archive } from '../../helpers/constants'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        backgroundColor: colors.blue,
        justifyContent: 'space-around',
    },
    right: {
        width: '30%',
        justifyContent: 'center',
    },
    center: {
        width: 65,
        height: 65,
        borderRadius: 30,
        marginTop: 10,
        backgroundColor: colors.white,
        position: 'absolute',
        right: '50%',
        transform: [{ translateX: 32.5 }, { translateY: -40 }]
    },
    left: {
        width: '30%',
        justifyContent: 'center',
        borderColor: 'green',
        alignItems: 'flex-end',

    },
    button: { alignItems: 'center', width: 55 },
    img: { width: 26, height: 26 },
    text: {
        marginTop: 5, fontWeight: 'bold',
        color: colors.white
    }
});

interface StateProp {
    index: number;
}

interface NavigationProp {
    navigate: (screen: string) => void;
}

export interface TabProps {
    state: StateProp;
    navigation: NavigationProp
}

const Tab = ({ state, navigation }: TabProps) => {

    return (
        <View style={styles.container}>
            <View style={styles.right}>
                <Pressable testID='ShoppingListButton' onPress={() => navigation.navigate('ShoppingList')} style={styles.button}>
                    <Image
                        style={styles.img}
                        source={state.index === 0 ? shoppingListActive : shoppingList} />
                    <Text style={{ ...styles.text, color: state.index === 0 ? colors.orange : colors.white }}>List</Text>
                </Pressable>
            </View>
            <AddButton />
            <View style={styles.center} />
            <View style={styles.left}>
                <Pressable testID='ArchivedShoppingListButton' onPress={() => navigation.navigate('ArchivedShoppingList')} style={styles.button}>
                    <Image
                        style={styles.img}
                        source={state.index === 1 ? archiveActive : archive} />
                    <Text style={{ ...styles.text, color: state.index === 1 ? colors.orange : colors.white }}>Archive</Text>
                </Pressable>
            </View>
        </View>
    )
};

export default Tab;