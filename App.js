import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { useEffect, useState } from 'react';
const data = require('./database.json');

export default class App extends Component {
  constructor(props) {
    super(props);
    const dataTable = data.bikes.map(bike => [bike.id, bike.name, bike.wheel, bike.usage, bike.price]);
    this.state = {
      HeadTable: ['#', 'Name', 'Wheel', 'Usage', 'Price'],
      DataTable: dataTable
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table>
          <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableHead}/>
          <Rows borderStyle={{borderWidth: 0, borderColor: '#'}} data={state.DataTable} textStyle={styles.TableText}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 15,
    paddingTop: 35,
    backgroundColor: '#EEEEEE',
  },
  HeadStyle: { 
    height: 50,
    alignContent: "center",
    backgroundColor: '#FFCD32',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

  },
  TableHead: {
    padding: 12,
    alignContent: "center",
    color: '#FFFFFF',
  },
  TableText: { 
    margin: 10,
    color: '#474040',
  },
});
