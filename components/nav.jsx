import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Search from '../assets/navBarIcons/search';
import Home from '../assets/navBarIcons/home';
import Plus from '../assets/navBarIcons/plus';
import Heart from '../assets/navBarIcons/heart';


export default function Nav() {
    return (
        <View style={styles.list}>
            <Search />
            <Home />
            <Plus />
            <Heart />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(0, 0, 0, .16)',
        backgroundColor: '#fafafa',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 4,
    },
})