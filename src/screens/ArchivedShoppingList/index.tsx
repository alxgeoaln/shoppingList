import React, { useContext, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import ListItem from '../../components/ListItem';
import { IShoppingList } from '../../context/interface';
import { StoreContext } from '../../context/store';
import { ArchivedShoppingListProps } from './interface';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flex: 1
    },
    scrollView: {
        flexGrow: 1
    }
})


const ArchivedShoppingList = ({navigation}: ArchivedShoppingListProps) => {

    const { archivedShoppingListState, getArchivedShoppingList } = useContext(StoreContext)

    useEffect(() => {
        getArchivedShoppingList();
    }, [])

    const handleNavigation = (data: IShoppingList) => () => {
        navigation.navigate('ShoppingListDetails', { ...data, archived: true });
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={archivedShoppingListState}
                keyExtractor={item => item.name}
                renderItem={item => (
                    <ListItem
                        onPress={handleNavigation(item.item)}
                        label={item.item.name}
                    />
                )}
            />
        </SafeAreaView>
    )
};

export default ArchivedShoppingList;