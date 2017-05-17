import Expo, { AppLoading } from 'expo';
import React from 'react';
import { AsyncStorage, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import EStyleSheet from 'react-native-extended-stylesheet';

import Root from './src/Root';

import Colors from './constants/Colors';
import { fontAssets } from './helpers';
import store from './src/redux/store';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

EStyleSheet.build(Colors);

class App extends React.Component {
  state = {
    fontLoaded: false,
    ready: false,
  }

  componentDidMount() {
    this._loadAssetsAsync();
    persistStore(
      store,
      {
        storage: AsyncStorage,
        whitelist: [
          'user',
        ],
      },
      () => this.setState({ ready: true })
    );
  }

  async _loadAssetsAsync() {
    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded || !this.state.ready) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
