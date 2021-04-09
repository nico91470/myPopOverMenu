import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { Menu, MenuOptions, MenuOption, MenuTrigger, renderers } from 'react-native-popup-menu'

import { FontAwesome } from '@expo/vector-icons'

const { Popover } = renderers

export default function Item({ id, text }) {
    return (
        <Menu
            onSelect={value => Alert.alert(value)}
            renderer={Popover}
            rendererProps={{ preferredPlacement: 'bottom' }}
        >
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
            <MenuOptions
                customStyles={{ backgroundColor: 'yellow' }}
            >
                <MenuOption value="delete">
                    <View style={styles.menuLine}>
                        <FontAwesome name='remove' color='black' size={18} />
                        <Text>Suppression</Text>
                    </View>
                </MenuOption>
                <MenuOption value="modify">
                    <View style={styles.menuLine}>
                        <FontAwesome name='pencil' color='black' size={18} />
                        <Text>Modification</Text>
                    </View>
                </MenuOption>
            </MenuOptions>
        </Menu>
    )
}

const styles = StyleSheet.create({

    text: {
        color: '#ffffff',
        textAlign: 'center',
    },
    menuLine: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})