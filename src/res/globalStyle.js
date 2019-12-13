
import React from 'react'
import { StyleSheet } from 'react-native'

export const globalStyle = StyleSheet.create({
    /* example link */
    // textStyle:{
    // fontSize: 16
    // }
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    centerWrap: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerMenuIcon: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    row: {
        flexDirection: 'row',
    },
    rowSpace: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowEndEnd: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    rowEnd: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    rowCenter: {
        flexDirection: 'row',
    },
});

