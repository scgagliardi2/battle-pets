import React from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './screens/Navigation';
import BattleScreen from './screens/BattleScreen';
import MapScreen from './screens/MapScreen';

interface Props {

}

interface State {
  Content: string,
}

export default class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.changeScreen = this.changeScreen.bind(this);

    this.state = {
      Content: 'Navigation',
    };
  }
  
  changeScreen(screen: string) {
    this.setState({
      Content: screen,
    });
  }

  render() {
    switch (this.state.Content) {
      case 'Navigation':
        return (
          <Navigation onNavigate={this.changeScreen}/>
        );
      case 'BattleScreen':
        return (
          <BattleScreen onNavigate={this.changeScreen}/>
        );
        case 'MapScreen':
          return (
            <MapScreen onNavigate={this.changeScreen}/>
          );
    };
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
