import React from 'react';
import {View, StyleSheet} from 'react-native';
import NavButton from '../components/NavButton';

interface Props {
    onNavigate: (screen: String) => any,
}

interface State {
}

export default class MapScreen extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.screen}>
                <NavButton title="Nav Menu" onPress={() => this.props.onNavigate('Navigation')}/>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        position: 'absolute',
        padding: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        flex: 1,
    },
});