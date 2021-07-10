import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Alert } from 'react-native'
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import ListItem from '../../components/ListItem';
import { IShoppingList } from '../../context/interface';
import { StoreContext } from '../../context/store';
import { removeStorage } from '../../helpers/asyncStorage';
import { archiveActive } from '../../helpers/constants';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flex: 1
    },
    scrollView: {
        flexGrow: 1
    }
});

interface Params extends IShoppingList {
    index: number;
}

interface NavigationProp {
    navigate: (screen: string, data: Params) => void;
}

interface ShoppingListProps {
    navigation: NavigationProp
}

const ShoppingList = ({ navigation }: ShoppingListProps) => {

    const [isSorted, setIsSorted] = useState(false);

    const {
        shoppingList,
        getShoppingList,
        postArchiveShoppingList,
        sortByDate
    } = useContext(StoreContext)

    useEffect(() => {
        getShoppingList();
        // removeStorage()
    }, [])

    const handleArchive = (item: IShoppingList, i: number) => () => {
        Alert.alert('', 'arhive?', [
            {
                text: 'OK',
                onPress: () => {
                    postArchiveShoppingList(item, i)
                }
            },
            {
                text: "Cancel"
            }
        ])
    }

    const handleNavigation = (data: IShoppingList, i: number) => () => {
        navigation.navigate('ShoppingListDetails', { ...data, index: i });
    }

    const handleSortByDate = () => {
        sortByDate(isSorted)
        setIsSorted(s => !s);
    }

    return (
        <SafeAreaView style={styles.container}>
            {
                shoppingList.length ? (
                    <Button
                        label={'Sort by date'}
                        style={{ marginTop: 15, width: 100, marginBottom: 10 }}
                        onPress={handleSortByDate}
                    />
                ) : null
            }

            <FlatList
                data={shoppingList}
                keyExtractor={item => item.name}
                renderItem={item => (
                    <ListItem
                        onPress={handleNavigation(item.item, item.index)}
                        label={item.item.name}
                        button={<IconButton
                            onPress={handleArchive(item.item, item.index)}
                            icon={archiveActive} />
                        }
                    />
                )}
            />
        </SafeAreaView>
    )
};

export default ShoppingList;