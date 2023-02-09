import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, } from 'react-native';

const App = () => {
  return (

    //
    <View style={styles.container}>
      <View style={styles.container}>
      </View>
      <View style={styles.r}>
        <View style={styles.top}>

          <View style={styles.middle}>
            <Image
              style={{ flex: 1, borderRadius: 13 , height:'100%' }}
              source={require('./mosa.png')} />
          </View>

          <View style={styles.bottom}>
            <Text style={text.baseText}>
              I am vengeance
            </Text>
            <Text style={text.baseText}>
              ??/??/??
            </Text>
          </View>

        </View>
        <View style={styles.m}>
          <Text style={text.innerText}>
            Batman ID
          </Text>
        </View>
      </View>
      <View style={styles.container}>
      </View>
    </View>
  );
};
//container:{
//   justifyContent: 'center',
//   alignItems: 'center',
// },

const styles = StyleSheet.create({
  container: {
    //  justifyContent: 'center',
    //   alignItems: 'center',
    flex: 1,// "%"
    justifyContent: 'space-between',
    backgroundColor: 'grey',
    paddingTop: 0,// in
    margin: 0,// out
  },
  r: {
    flex: 1,// "%"
    //justifyContent: 'space-between',
    backgroundColor: '#865B1F',
    margin: 20,// out
    borderWidth: 5,
    borderRadius: 25,
  },
  top: {
    flex: 1, flexDirection: 'row',
    backgroundColor: '#68522D',
    paddingHorizontal: 5,// in
    borderRadius: 20,
    //borderTopLeftRadius: 20,
    //borderTopRightRadius: 20,
  },
  middle: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#68522D',
    borderWidth: 6,
    borderRadius: 20,
    //borderColor: 'red',
  },
  bottom: {
    padding: 0,// in
    margin: 0,// out
    flex: 1,
    backgroundColor: '#68522D',
    borderWidth: 0,
    borderRadius: 20,
  },
  m: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,// in
    margin: 0,// out
    flex: 0.5,
    backgroundColor: '#68522D',
    borderRadius: 20,
  },
});

const text = StyleSheet.create({
  baseText: {
    //flex: 0.4,
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 7,// out
    marginTop: 7,
    color: 'black',
  },
  innerText: {
    flexDirection: 'column',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
    fontStyle: 'italic',
  },
});

export default App;
