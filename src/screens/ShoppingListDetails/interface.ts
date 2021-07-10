type item = {
    value: string
}

interface Params {
    name: string;
    items: Array<item>,
    index: number;
    archived: boolean;
}

interface Route {
    params: Params;
}

export interface ShoppingListDetailsProps {
    route: Route;
}