import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';
import { getData, storeData } from '../helpers/asyncStorage';
import { shoppingListKey, shoppingListArchiveKey } from '../helpers/constants';
import { IShoppingList, storeContextDefault, StoreContextType, StoreProps } from './interface';



export const StoreContext = createContext<StoreContextType>(storeContextDefault);

const Store = ({ children }: StoreProps) => {
    const [addButtonPressed, setAddButtonPressed] = useState<boolean>(false);
    const [shoppingList, setShoppingList] = useState<IShoppingList[]>([]);
    const [archivedShoppingListState, setArchivedShoppingList] = useState<IShoppingList[]>([]);

    const handleAddButton = (bool: boolean) => () => setAddButtonPressed(bool);

    const getShoppingList = () => {
        getData(shoppingListKey)
            .then((res: Array<IShoppingList>) => {
                if (res) {
                    setShoppingList(res)
                }
            })
            .catch(() => Alert.alert('', 'Cannot get list'))
    }

    const postShoppingList = (object: IShoppingList) => {
        const data = [...shoppingList, object];
        storeData(data, shoppingListKey)
            .then(() => setShoppingList(s => [
                ...s,
                object
            ]))
            .catch(() => Alert.alert('', 'Cannot save item'))
    }

    const editShoppingList = (object: IShoppingList, index: number) => {
        const shoppingListToEdit: Array<IShoppingList> = [...shoppingList];

        for (let indexToEdit = 0; indexToEdit < shoppingListToEdit.length; indexToEdit++) {
            if (indexToEdit === index) {
                shoppingListToEdit[indexToEdit] = object;
            }
        }

        storeData(shoppingListToEdit, shoppingListKey)
            .then(() => {
                setShoppingList(shoppingListToEdit)
                Alert.alert('', 'Successfully edited')
            })
            .catch(() => Alert.alert('', 'Error'))
    }

    const getArchivedShoppingList = () => {
        getData(shoppingListArchiveKey)
            .then((res:  Array<IShoppingList>) => {
                if (res) {
                    setArchivedShoppingList(res)
                }
            })
            .catch(() => Alert.alert('', 'Cannot get archived list'))
    }

    const postArchiveShoppingList = (object: IShoppingList, index: number) => {
        const data = shoppingList.filter((item, i) => i !== index);

        storeData(data, shoppingListKey)
            .then(() => setShoppingList(data))
            .catch((e:any) => console.log('storeShoppingListError', e))

        const archivedShoppingList = [...archivedShoppingListState, object]

        storeData(archivedShoppingList, shoppingListArchiveKey)
            .then(() => setArchivedShoppingList(s => [
                ...s,
                object
            ]))
            .catch((e:any) => Alert.alert('', 'Cannot save archived item'))
    }

    const sortByDate = (sorted: boolean) => {
        const sortedShoppingList = shoppingList
            .slice()
            .sort((a, b) => {
                if (!sorted) {
                    return b.createdAt! - a.createdAt!
                } else {
                    return a.createdAt! - b.createdAt!
                }
            });

        setShoppingList(sortedShoppingList);
    }

    return (
        <StoreContext.Provider value={{
            handleAddButton,
            addButtonPressed,
            shoppingList,
            getShoppingList,
            postShoppingList,
            editShoppingList,
            archivedShoppingListState,
            getArchivedShoppingList,
            postArchiveShoppingList,
            sortByDate
        }}>
            {children}
        </StoreContext.Provider>
    )
};

export default Store;