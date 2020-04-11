import React from 'react';
import {View, StyleSheet} from 'react-native';
import NavButton from '../components/NavButton';
import MapView from 'react-native-maps';

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
                <MapView 
                style={styles.mapStyle} 
                region={{
                    latitude: 42.882004,
                    longitude: 74.582748,
                    latitudeDelta: 0.0992,
                    longitudeDelta: 0.0421
                }}
                showsUserLocation={true}
                />
                <View style={styles.navButtonCont}>
                    <NavButton title="Nav Menu" onPress={() => this.props.onNavigate('Navigation')}/>
                </View>
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
    navButtonCont: {
        flex: 1,
    },
    mapStyle: {
        flex: 5,
    },
});