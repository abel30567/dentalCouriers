import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    findNodeHandle,
    Dimensions,
    PixelRatio,
    Button,
    View,
  } from 'react-native';

import logo from '../assets/images/dentalCourierLogo.png';
import AuthService from '../auth/AuthService';

const Auth = new AuthService();

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    }
  async handleLogin() {
    try {
        console.log("using:",this.state.email, this.state.password)
        let bool = await Auth.login(this.state.email, this.state.password);
        console.log("logged in", bool);
        this.props.navigation.navigate('Main');
    } catch (error) {
        alert('Problem Logging in. Try again')
    }
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column'}}>
        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
              <Image
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: 'contain',
                }}
                source={logo}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email:</Text>
              <TextInput
                style={styles.inputField}
                onChangeText={email => this.setState({email})}
                value={this.state.email}
                returnKeyType="done"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Password:</Text>
              <TextInput
                style={styles.inputField}
                onChangeText={password => this.setState({password})}
                secureTextEntry={true}
                ref={textInputRef => {
                  this.textInputRef = textInputRef;
                }}
                placeholder="Enter Password"
                // keyboardType={Platform.OS === 'ios' ? 'default' : 'visible-password'}
                returnKeyType="done"
              />
            </View>

            <View style={styles.helpContainer}>
              <TouchableOpacity
                onPress={() => this.handleLogin()}
                style={styles.helpLink}>
                <Text style={styles.helpLinkText}>Login</Text>
              </TouchableOpacity>
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
      // paddingTop: 15,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
    },
    helpContainer: {
      flex: 1 / 3,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 10,
      // flex: 1/10,
      height: 45,
      width: 90,
      flexDirection: 'row',
      justifyContent: 'center',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#2f95dc',
      backgroundColor: '#2f95dc',
    },
    helpLinkText: {
      fontSize: 14,
      color: 'white',
      fontWeight: 'bold',
    },
    inputLabel: {
      flex: 1 / 4,
      fontWeight: 'bold',
      fontSize: 15,
      marginTop: 5,
    },
    imageContainer: {
      flex: 1 / 3,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: 'white',
      padding: 15,
      height: 100,
    },
    inputField: {
      height: 40,
      borderColor: 'gray',
      borderRadius: 5,
      fontSize: 17,
      borderWidth: 1,
      flex: 1 / 2,
      textAlign: 'center',
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      // marginTop: 10,
      justifyContent: 'space-evenly',
      height: 80,
    },
  });