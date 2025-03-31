import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/rootNavigator';
import {Provider} from 'react-redux';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Provider>
        <RootNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
