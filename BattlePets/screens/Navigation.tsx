import React from 'react';
import {View, StyleSheet} from 'react-native';
import NavButton from '../components/NavButton';

interface Props {
    onNavigate: (screen: String) => any,
}

interface State {
}

export default class Navigation extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.column}>
                    <NavButton title='BattleScreen' onPress={() => this.props.onNavigate('BattleScreen')}/>
                    <NavButton title='MapScreen' onPress={() => this.props.onNavigate('MapScreen')}/>
                    <NavButton title='BattleScreen' onPress={() => this.props.onNavigate('BattleScreen')}/>
                    <NavButton title='BattleScreen' onPress={() => this.props.onNavigate('BattleScreen')}/>
                </View>
                <View style={styles.column}>
                    <NavButton title='BattleScreen' onPress={() => this.props.onNavigate('BattleScreen')}/>
                    <NavButton title='BattleScreen' onPress={() => this.props.onNavigate('BattleScreen')}/>
                    <NavButton title='BattleScreen' onPress={() => this.props.onNavigate('BattleScreen')}/>
                    <NavButton title='BattleScreen' onPress={() => this.props.onNavigate('BattleScreen')}/>   
                </View>
            </View>
        );  
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    column: {
        margin: 2,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});