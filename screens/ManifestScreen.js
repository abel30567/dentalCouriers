import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
  } from 'react-native';


export default class ManifestScreen extends React.Component {
  static navigationOptions = {
    title: 'Manifest',
  };
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column'}}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.headContainer}>
            <Text style={styles.textHead}>
              Manifest Screen
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  imageRow: {
    flex: 1,
    flexDirection: 'row',
  },
  headContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textHead: {
    fontSize: 26,
    fontWeight: '400'
  },
  lowerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  logout: {
    backgroundColor: '#e05d24',
    flex: 1/3,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 8,
    borderRadius: 5,
    height: 50,
  },
  logoutText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
});
