export const storeContextDefault = {
    handleAddButton: (bool: boolean) => () => undefined,
    addButtonPressed: false,
    shoppingList: [],
    getShoppingList: () => undefined,
    postShoppingList: (object: object) => undefined,
    editShoppingList: () => undefined,
    archivedShoppingListState: [],
    getArchivedShoppingList: () => undefined,
    postArchiveShoppingList: () => undefined,
    sortByDate: () => undefined
}

export interface StoreProps {
    children: React.ReactNode
}

interface IShoppingListItem {
    value: string
}

export interface IShoppingList {
    name: string;
    items: Array<IShoppingListItem>;
    createdAt?: number
}

export type StoreContextType = {
    handleAddButton: (bool: boolean) => () => void,
    addButtonPressed: boolean,
    shoppingList: Array<IShoppingList>,
    getShoppingList: () => void,
    postShoppingList: (object: IShoppingList) => void,
    editShoppingList: (object: IShoppingList, index: number) => void,
    archivedShoppingListState: Array<IShoppingList>,
    getArchivedShoppingList: () => void,
    postArchiveShoppingList: (object: IShoppingList, index: number) => void,
    sortByDate: (bool: boolean) => void
}