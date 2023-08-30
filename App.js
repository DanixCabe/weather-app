import React from 'react';
import { Provider } from 'react-redux';
import {store} from './store'
import { RootSiblingParent } from 'react-native-root-siblings'
import { WeatherApp } from './src/screens';

export default function App() {

    return (
        <Provider store={store}>
            <RootSiblingParent>
                <WeatherApp/>
            </RootSiblingParent>
        </Provider>
    );
}
