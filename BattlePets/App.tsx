import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './screens/Navigation';
import BattleScreen from './screens/BattleScreen';
import MapScreen from './screens/MapScreen';
import HUD from './components/HUD';
import NavButton from './components/NavButton';

interface Props {
}

interface State {
  Content: string,
  Display: any,
}

export default class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.changeScreen = this.changeScreen.bind(this);

    this.state = {
      Content: 'Navigation',
      Display: <Navigation onNavigate={this.changeScreen}/>
    };
  }
  
  changeScreen(screen: string) {
    this.setState({Content: screen});
    switch (screen) {
      case 'Navigation':
        this.setState({Display: <Navigation onNavigate={this.changeScreen}/>});
        break;
      case 'BattleScreen':
        this.setState({Display: <BattleScreen onNavigate={this.changeScreen}/>});
        break;
      case 'MapScreen':
        this.setState({Display: <MapScreen onNavigate={this.changeScreen}/>});
        break;
      case 'HUD':
        this.setState({Display: <HUD onNavigate={this.changeScreen}/>});
        break;
    };
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.display}>
          {this.state.Display}
        </View>
        <View style={styles.buttonContainer}>
          <NavButton title='Nav Menu' onPress={() => this.changeScreen('Navigation')}/>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  display: {
    flex: 5,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

