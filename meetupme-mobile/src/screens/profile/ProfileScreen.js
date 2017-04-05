import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';

class ProfileScreen extends Component {
  static navigationOptions = {
    header: {
      style: { backgroundColor: Colors.redColor },
    },
    tabBar: {
      icon: ({ tintColor }) => (
        <MaterialIcons
          name="account-circle"
          size={25}
          color={tintColor}
        />
      ),
    },
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>ProfileScreen</Text>
      </View>
    );
  }
}

export default ProfileScreen;
