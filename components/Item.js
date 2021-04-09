import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { Menu, MenuOptions, MenuOption, MenuTrigger, renderers } from 'react-native-popup-menu'

const { popover } = renderers

export default function Item({ id, text }) {
    return (
        <Menu onSelect={value => Alert.alert(value)} renderer={popover}>
            <MenuTrigger>
                <View
                    style={{
                        height: 100,
                        backgroundColor: '#253698',
                        margin: 10,
                        borderRadius: 20,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={styles.text}>{text}</Text>
                </View>
            </MenuTrigger>
            <MenuOptions>
                <MenuOption value="delete" text="SUPPRESSION" />
                <MenuOption value="modify" text="MODIFICATION" />
            </MenuOptions>
        </Menu>
    )
}

const styles = StyleSheet.create({

    text: {
        color: '#ffffff',
        textAlign: 'center'
    }
})