import React, { useContext, useRef, useEffect } from 'react';
import { Pressable, StyleSheet, Animated } from 'react-native';
import { StoreContext } from '../../context/store';
import colors, {plusIcon} from '../../helpers/constants'

const styles = StyleSheet.create({
    addButton: {
        height: 55,
        width: 55,
        borderRadius: 30,
        position: 'absolute',
        left: '50%',
        backgroundColor: colors.orange,
        transform: [{ translateX: -27.5 }, { translateY: -25 }],
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 40,
        height: 40
    }
})


const AddButton = () => {

    const { handleAddButton } = useContext(StoreContext);

    return (
        <Pressable onPress={handleAddButton(true)} style={styles.addButton}>
            <Animated.Image style={styles.img} source={plusIcon} />
        </Pressable>
    )
};

export default AddButton;