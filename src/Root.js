import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './redux/store/configureStore'
// './redux/store/configureStore';
import AppNavigator from './views/Navigation/AppNavigator';

import Loader from './components/Loader';
const { store, persistor } = configureStore();

// configureAxios({ store });

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Loader />
                    <AppNavigator />
                </PersistGate>
            </Provider>
        );
    }
}
