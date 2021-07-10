import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button, { ButtonProps } from '../../../src/components/Button';

const props: ButtonProps = {
    onPress: () => undefined,
    color: 'red',
    label: 'aaa'
}

describe('Button', () => {
    it('Should render properly', () => {
        const { baseElement } = render(<Button {...props} />);
        expect(baseElement).toBeTruthy();
    });

    it('Should render with `style` property', () => {
        const alteredProps = {
            ...props,
            style: {
                backgroundColor: 'red',
            },
        };
        const { baseElement } = render(<Button {...alteredProps} />);
        expect(baseElement).toBeTruthy();
    });

    it('Should be pressed properly', () => {
        const { baseElement } = render(<Button {...props} />);
        
        fireEvent.press(baseElement)
    })

})