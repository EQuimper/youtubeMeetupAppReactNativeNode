import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'native-base';

import Colors from '../../../constants/Colors';

class CreateMeetupScreen extends Component {
  static navigationOptions = {
    title: 'Create a new Meetup',
    header: ({ goBack }) => {
      const style = { backgroundColor: Colors.redColor };

      const titleStyle = { color: Colors.whiteColor };

      const left = (
        <Button transparent onPress={() => goBack()}>
          <Icon
            name="md-close"
            style={{
              fontSize: 30,
              color: Colors.whiteColor
            }}
          />
        </Button>
      );

      return { style, titleStyle, left };
    }
  }
  render() {
    return (
      <View>
        <Text>Hello world</Text>
      </View>
    );
  }
}

export default CreateMeetupScreen;
