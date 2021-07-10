import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Tab, { TabProps } from '../../../src/components/Tab';


const props: TabProps = {
  state: {
    index: 0
  },
  navigation: {
    navigate: jest.fn()
  },
};


describe('Tab', () => {

  const { baseElement, findByTestId } = render(<Tab {...props} />);
  expect(baseElement).toBeTruthy();

  it('Should navigate to ShoppingList', async () => {
    const ShoppingListButton = await findByTestId('ShoppingListButton');
    expect(ShoppingListButton).toBeTruthy();
    fireEvent.press(ShoppingListButton)
    expect(props.navigation.navigate).toHaveBeenCalledWith('ShoppingList')
  });

  it('Should navigate to ShoppingList', async () => {
    const ArchivedShoppingListButton = await findByTestId('ArchivedShoppingListButton');
    expect(ArchivedShoppingListButton).toBeTruthy();
    fireEvent.press(ArchivedShoppingListButton)
    expect(props.navigation.navigate).toHaveBeenCalledWith('ArchivedShoppingList')
  });

})