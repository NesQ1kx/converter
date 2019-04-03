import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import * as langs from '../shared/Langs';
import * as types from '../shared/Types'

export default class ChooseType extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let checkBoxes = [];
        checkBoxes = types.TYPES.map((object, index) =>
            <CheckBox
                size={20}
                key={index}
                title={langs.convert(object, this.props.language)}
                checked={this.props.initType === object.code}
                onPress={() => this.props.changeHandler(object.code)}
            />
        );
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    {checkBoxes.slice(0,3)}
                </View>
                <View style={styles.item}>
                    {checkBoxes.splice(3,7)}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flexDirection: 'row'
    },

    item: {
        flex: 1,
        flexDirection: 'column'
    }
});
