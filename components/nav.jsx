import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Nav() {
    return (
        <View style={styles.list}>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Home</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>About</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Contact</Text></TouchableOpacity>
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
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'blue',
        color: '#eee',
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    }
})