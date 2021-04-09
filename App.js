import React, { Component } from 'react';
import { View, Text, FlatList, Alert, StyleSheet } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import Item from './components/Item';

const data = [
  {
    id: 1,
    text: 'Test 1'
  },
  {
    id: 2,
    text: 'Test 2'
  },
  {
    id: 3,
    text: 'Test 3'
  },
  {
    id: 4,
    text: 'Test 4'
  },
  {
    id: 5,
    text: 'Test 5'
  }
]

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={styles.header}
        >
          <Text style={styles.text}>MENU TROP BEAU</Text>
        </View>
        <MenuProvider style={styles.container}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Item text={item.text} id={item.id} />
            )}
          />
        </MenuProvider>
        <View style={styles.footer}>
          <Text style={styles.text}>DE MERDE (footer de merde) (haha)</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    height: '70%'
  },
  text: {
    fontSize: 30,
    textAlign: 'center'
  },
  footer: {
    height: '15%',
    backgroundColor: 'grey',
    justifyContent: 'center'
  },
  header: {
    height: '15%',
    backgroundColor: 'grey',
    justifyContent: 'center'
  }
});