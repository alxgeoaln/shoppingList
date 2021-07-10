import { IShoppingList } from "../../context/interface";

interface Params extends IShoppingList {
    archived: boolean;
}

interface NavigationProp {
    navigate: (screen: string, data: Params) => void
}

export interface ArchivedShoppingListProps {
    navigation: NavigationProp
}
