import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    img: {
        width: 30,
        height: 30
    }
})

interface IconButtonProps {
    icon: number;
    onPress: () => void;
}

const IconButton = ({icon, onPress}: IconButtonProps) => {
    return (
        <Pressable onPress={onPress}>
            <Image style={styles.img} source={icon} />
        </Pressable>
    )
};

export default IconButton;