import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
    PixelRatio,
    TouchableWithoutFeedback,
    View,
  } from 'react-native';

import AuthService from '../auth/AuthService';

const { width, height } = Dimensions.get('window');

// Use iPhone6 as base size which is 375 x 667
const baseWidth = 375;
const baseHeight = 667;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

export const scaledSize =
    (size) => Math.ceil((size * scale));

const resWidth = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};
const resHeight = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};

const Auth = new AuthService();
export default class Order extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          
      }
  }
  componentDidMount() {
      console.log(this.props);
  }
  //
  //  TO DO: CONNECT THIS COMPONENT TO CARD SCREEN, STYLE APPROPRIATELY
  //
  
  // toMessage() {
  //   this.props.navigation.navigate('MessageUser', {
  //     card: this.props.card,
  //     userMessaged: this.props.user_id,
  //   });
  // }
  toMessage() {
    // Auth.fetch('http://192.168.0.106:3000/api/v1.1/chat/', {
    console.log("mssg");
  }
  toProfile() {
    // this.props.navigation.navigate('Profile', {
    //   user: this.props.user_id,
    // });
    console.log("Profile")
  }
  render() { 
    
    return (
        <View style={styles.containerRow}>
          <TouchableOpacity onPress={() => this.toProfile()} style={styles.profileImage}>
            <Image
            source={{uri: this.props.picture}}
            style={styles.image}
            />
          </TouchableOpacity>
          <View style={styles.contentContainer}>
            <View style={styles.dataContainer}>
              <Text style={styles.demandFont}>{this.props.name}</Text>
    <Text style={styles.streetFont}>{this.props.street}</Text>
            </View>
            <View style={styles.contactContainer}>
              {
                this.props.pickup ? 
                <TouchableOpacity onPress={() => this.toMessage()} style={styles.contactButton}>
                  <Text style={styles.contactFont}>Pick Up</Text>
                </TouchableOpacity> :
                <TouchableOpacity onPress={() => this.toMessage()} style={styles.contactButton}>
                <Text style={styles.contactFont}>Drop Off</Text>
              </TouchableOpacity>
              }
              
            </View>
            
          </View>
        </View>
    );
  }
}
let containerRowHeight = resHeight('12%');
let containerContactHeight = resHeight('3%');
let contactFontSize = 16;
let marginRow = 5;
let demandFont = scaledSize(16);
let streetFont = scaledSize(12);
if (PixelRatio.get() >= 2 &&  Dimensions.get('window').height > 736) {
  containerRowHeight = resHeight('10%');
}
if (Dimensions.get('window').width > 800) {
  containerRowHeight = resHeight('10%');
  marginRow = '15%';
  contactFontSize = 26;
}

if (PixelRatio.get() == 2 && Dimensions.get('window').width < 325) {
  demandFont = 13;
  streetFont = demandFont - 2;
  contactFontSize = 12;
}
if (Platform.OS == 'android') {
  
  if(Dimensions.get('window').height < 641) {
    demandFont = 14;
    streetFont = demandFont - 2;
  contactFontSize = 13
  }
  // Galaxy S10
  if(Dimensions.get('window').height > 1000) {
    demandFont = 18;
    streetFont = demandFont - 2;
    contactFontSize = 19
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    height: containerRowHeight,
    paddingLeft:10,
    paddingRight: 10,
    paddingBottom: 5,
    marginLeft: marginRow,
    marginRight: marginRow,
    shadowColor: '#0000009c', 
    elevation: 1, 
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2, 
    marginBottom:20,
},
  profileImage: {
      flex: 1/6,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: ( Platform.OS === 'ios' ) ? 10 : 0
      // backgroundColor: 'white',
    //   borderTopLeftRadius: 10,
    //   borderBottomLeftRadius: 10,
  },
  contentContainer: {
      flex: 5/6,
      flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#f7f7f7'
  },
  userInfo: {
    fontSize: 16,
    paddingLeft: 20,
    fontWeight: "500" 
  },
  demandFont: {
    fontSize: demandFont,
    fontWeight: "400",
  },
  streetFont: {
    fontSize: streetFont,
  },
  dataContainer: {
    flex: 2/3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white', 
    paddingTop: 15,
  },
  contactContainer: {
    flex: 1/3,
    flexDirection: 'column',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'white'
  },
  contactButton: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'transparent',
    flex: 1/2,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#2f95dc'
  },
  contactFont: {
    fontSize: contactFontSize,
    fontWeight: "500",
    color: 'white',
    textAlign: 'center'
  }
});
