import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import AddButton from '../../../src/components/AddButton';


describe('Button', () => {
    it('Should render properly', () => {
        const { baseElement } = render(<AddButton />);
        expect(baseElement).toBeTruthy();
    });

    it('Should be pressed properly', () => {
        const { baseElement } = render(<AddButton />);
        
        fireEvent.press(baseElement)
    })

})