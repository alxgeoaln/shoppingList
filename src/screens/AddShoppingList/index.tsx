import React, { useRef, useContext, useState } from 'react';
import { useEffect } from 'react';
import { Text, StyleSheet, ScrollView, View, Pressable, Alert } from 'react-native';
import ActionSheet from "react-native-actions-sheet";

import colors, { deleteIcon } from '../../helpers/constants';
import Input from '../../components/TextInput';
import { StoreContext } from '../../context/store';
import ListItem from '../../components/ListItem';
import IconButton from '../../components/IconButton';
import { IShoppingList } from '../../context/interface';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 15,
        paddingBottom: 50,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 10
    },
    header: {
        height: 50,
        paddingHorizontal: 30,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 15
    }
});

const defaultItem = {
    name: "",
    items: [],
}


const AddShoppingList = () => {
    const actionSheetRef = useRef<ActionSheet>(null);
    const { addButtonPressed, handleAddButton, postShoppingList } = useContext(StoreContext);
    const [inputText, setInputText] = useState<string>('');
    const [itemsObject, setItem] = useState<IShoppingList>(defaultItem);

    useEffect(() => {
        actionSheetRef.current?.setModalVisible(addButtonPressed)
    }, [addButtonPressed])

    const handleAddItems = () => {
        if (!itemsObject.name) {
            setItem(s => ({
                ...s,
                name: inputText
            }))
            setInputText('')
        } else {
            setItem(s => ({
                ...s,
                items: [
                    ...s.items,
                    {
                        value: inputText,
                        checked: false
                    }
                ]
            }))

            setInputText('')
        }
    }

    const handleClose = () => {
        if (itemsObject.name) {
            Alert.alert('', 'Closing will erase all your shopping list', [
                {
                    text: 'Ok',
                    onPress: () => {
                        handleAddButton(false)()
                        setItem(defaultItem)
                    }

                },
                {
                    text: 'No'
                }
            ])
        } else {
            handleAddButton(false)()
        }
    }

    const handleSave = () => {
        if (itemsObject.name) {
            const item: IShoppingList = {
                ...itemsObject,
                createdAt: Date.now()
            }
            postShoppingList(item)
            handleAddButton(false)()
            setItem(defaultItem)
        } else {
            Alert.alert('', 'Nothing to save');
        }
    }

    const handleDeleteItem = (index: number) => () => {
        const filteredItems = itemsObject.items.filter((item, i) => i !== index);

        setItem(s => ({
            ...s,
            items: filteredItems
        }))
    }

    return (
        <ActionSheet
            closeOnPressBack={itemsObject.name ? false : true}
            closeOnTouchBackdrop={itemsObject.name ? false : true}
            onClose={handleAddButton(false)}
            ref={actionSheetRef}>
            <ScrollView style={styles.container}>
                <View style={{ flexDirection: 'row', paddingHorizontal: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Pressable onPress={handleClose}>
                        <Text style={styles.buttonText}>Close</Text>
                    </Pressable>
                    <Text style={styles.title}>{itemsObject.name ? itemsObject.name : 'Create your Shopping List'}</Text>
                    <Pressable onPress={handleSave} >
                        <Text style={{ ...styles.buttonText, color: colors.orange }}>Save</Text>
                    </Pressable>
                </View>

                <View>
                    {itemsObject.items.map((item, index) => (
                        <ListItem
                            key={`${item.value + index}`}
                            label={item.value}
                            button={<IconButton onPress={handleDeleteItem(index)} icon={deleteIcon} />}
                        />
                    ))}
                </View>

                <Input
                    style={{ marginTop: 20 }}
                    returnKeyType='done'
                    onSubmitEditing={handleAddItems}
                    value={inputText}
                    onChange={(value: string) => setInputText(value)}
                    placeholder={itemsObject.name.length ? 'Type item' : 'Shopping list name'} />

            </ScrollView>
        </ActionSheet>
    )
};

export default AddShoppingList;