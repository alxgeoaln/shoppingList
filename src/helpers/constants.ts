import { Dimensions } from 'react-native';

interface Colors {
    orange: string;
    blue: string;
    lightBlue: string;
    white: string;
}

const colors: Colors = {
    orange: '#FABB7C',
    blue: '#415A80',
    lightBlue: '#A5D4DC',
    white: '#F2F4F8'
}

export default colors

const SCREEN_HEIGHT: number = Dimensions.get('screen').height;

const shoppingListKey: string = 'shoppingList';
const shoppingListArchiveKey: string = 'shoppingListArchive';

const deleteIcon: number = require('../assets/icons/remove.png');
const shoppingList: number = require('../assets/icons/shopping-list.png');
const shoppingListActive: number = require('../assets/icons/shopping-list-active.png');
const archive: number = require('../assets/icons/inbox.png');
const archiveActive: number = require('../assets/icons/inbox-active.png');
const plusIcon: number = require('../assets/icons/plus.png');

export {
    SCREEN_HEIGHT,
    shoppingListKey,
    shoppingListArchiveKey,
    deleteIcon,
    shoppingList,
    shoppingListActive,
    archive,
    archiveActive,
    plusIcon
}