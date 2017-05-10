import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import { LoginScreen } from '../screens';
import Navigator from './Navigator';

@connect(
  state => ({
    navigation: state.navigation,
    user: state.user,
  })
)
export default class AppNavigator extends Component {
  state = { }
  render() {
    const navigation = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.navigation,
    });

    if (this.props.user.isLogged) {
      return <Navigator navigation={navigation} />;
    }

    return <LoginScreen />;
  }
}

export const router = Navigator.router;
