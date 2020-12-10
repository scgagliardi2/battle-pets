import React from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

interface Props {
}

interface State {
}

export default class Map extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <MapView 
            style={styles.mapStyle} 
            region={{
                latitude: 42.882004,
                longitude: 74.582748,
                latitudeDelta: 0.0992,
                longitudeDelta: 0.0421
            }}
            showsUserLocation={true}/>
        );
    }
}

const styles = StyleSheet.create({
    mapStyle: {
        flex: 1,
    },
});