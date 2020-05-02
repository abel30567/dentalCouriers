import {AsyncStorage} from 'react-native';

export default class AuthService {
  async login(email, password) {
    try {
      if (email && password) {
        let token = '1BTCis1BTC';
        this.setToken(token);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async setToken(idToken) {
    // Saves user token to AsyncStorage
    try {
      await AsyncStorage.setItem('id_token', idToken);
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  }

  async getToken() {
    // Retrieves the user token from AsyncStorage
    try {
      return await AsyncStorage.getItem('id_token');
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  }

  async logout() {
    // Clear user token and profile data from AsyncStorage
    try {
      await AsyncStorage.removeItem('id_token');
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  }
}
