import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

import data from '../data/orders';
import Order from '../components/Order';

export default class OrdersScreen extends React.Component {
  static navigationOptions = {
    title: 'Orders',
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    let orders = data.map((order) => (
      <Order
        key={order._id}
        name={order.name}
        street={order.street}
        pickup={order.pickup}
        dropoff={order.dropoff}
        picture={order.profileImg}
      />
    ));
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.headContainer}>
            <Text style={styles.textHead}>Orders Screen</Text>
          </View>
          {orders}
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
    justifyContent: 'center',
  },
  textHead: {
    fontSize: 26,
    fontWeight: '400',
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
