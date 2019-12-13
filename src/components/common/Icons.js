import React from 'react'

import {
    TouchableOpacity,
    Image
} from 'react-native';

export const SearchIcon = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress ? props.onPress : null}
        >
            <Image style={props.style}
                source={require('../../res/images/icons/Search_icon.png')} />
        </TouchableOpacity>
    )
}