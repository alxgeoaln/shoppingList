import React, { useContext, useState } from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Button from '../../components/Button';

import Input from '../../components/TextInput';
import { StoreContext } from '../../context/store';
import colors from '../../helpers/constants';
import { ShoppingListDetailsProps } from './interface';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        margin: 10,
        backgroundColor: colors.white
    },
    scrollView: {
        flexGrow: 1,
        backgroundColor: colors.white,
    },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    save: { marginLeft: 10 },

    title: {
        fontSize: 40,
        fontWeight: 'bold'
    }
})

const ShoppingListDetails = ({ route }: ShoppingListDetailsProps) => {

    const { editShoppingList } = useContext(StoreContext);

    const {
        params: {
            name,
            items,
            index,
            archived
        }
    } = route;

    const [edit, setToggleEdit] = useState(false);

    const [itemObject, setItemObject] = useState({
        name,
        items
    })

    const handleEdit = () => editShoppingList(itemObject, index);

    const handleChangeText = (i: number) => (value: string) => {
        const itemsToEdit = [...itemObject.items];


        for (let index = 0; index < itemsToEdit.length; index++) {
            if (index === i) {
                itemsToEdit[i].value = value;
                break
            }
        }

        setItemObject(s => ({
            ...s,
            itemsToEdit
        }))
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{name} {archived ? '(archived)' : ''}</Text>
                {
                    !archived ? (
                        <View style={{ flexDirection: 'row' }}>
                            <Button
                                onPress={() => setToggleEdit(edit => !edit)}
                                label={'Edit'}
                                color={colors.lightBlue}
                            />
                            <Button
                                onPress={handleEdit}
                                label={'Save'}
                                style={styles.save}
                            />
                        </View>
                    ) : null
                }

            </View>

            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollView}>
                {
                    itemObject.items.map((item, index: number) => (
                        <Input
                            editable={!archived && edit}
                            key={`${item.value + index}`}
                            style={{ marginBottom: 10 }}
                            onChange={handleChangeText(index)}
                            value={item.value} />
                    ))
                }
            </KeyboardAwareScrollView>
        </View>

    )
};

export default ShoppingListDetails;