import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as langs from '../shared/Langs';
import * as types from '../shared/Types'

export default class ConvertedValues extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let values = [];
        values = types.TYPES.map((object, index) =>
            <Text key={index} style={styles.item}>
                {langs.convert(object, this.props.language)} : {types.convertThis(this.props.value, types.getConverterByCode(object.code), types.getReverseConverterByCode(this.props.code))}
            </Text>
        );
        return(
            <View style={styles.container}>
                <View style={styles.items}>
                    {values.slice(0,3)}
                </View>
                <View style={styles.items}>
                    {values.splice(3,7)}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around'
    },

    items: {
        flexDirection: 'column'
    },

    item: {
        fontSize: 15
    }
});
