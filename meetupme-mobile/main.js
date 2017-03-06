import Exponent, { Components } from 'exponent';
import React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import Root from './src/Root';

import Colors from './constants/Colors';
import { cachedFonts } from './helpers';
import store from './src/redux/store';

EStyleSheet.build(Colors);

class App extends React.Component {
  state = {
    fontLoaded: false
  }

  componentDidMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    const fontAssets = cachedFonts([
      {
        montserrat: require('./assets/fonts/Montserrat-Regular.ttf')
      },
      {
        montserratBold: require('./assets/fonts/Montserrat-Bold.ttf')
      },
      {
        montserratLight: require('./assets/fonts/Montserrat-Light.ttf')
      },
      {
        montserratMed: require('./assets/fonts/Montserrat-Medium.ttf')
      }
    ]);

    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <Components.AppLoading />;
    }
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

Exponent.registerRootComponent(App);
