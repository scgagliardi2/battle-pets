import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Map from '../components/Map';

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
                <Map />
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
});