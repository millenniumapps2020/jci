import React from 'react'

import { TouchableOpacity, Image } from 'react-native';

import { images } from '../../res/images'

export const SearchIcon = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress ? props.onPress : null}
        >
            <Image style={props.style}
                source={images.icons.searchIcon} />
        </TouchableOpacity>
    )
}