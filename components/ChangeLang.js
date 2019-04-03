import React from "react";
import { StyleSheet, View, TextInput, Text } from 'react-native';
import * as langs from '../shared/Langs';
import ModalPicker from 'react-native-modal-picker'

export default class ChangeLang extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {language: this.props.language, label: 'English'}
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 25}}>{this.state.language === langs.EN ? 'Language:' : 'Язык:'}</Text>
                <ModalPicker
                    data={[
                        {key: 0, label: 'Русский', value: langs.RU},
                        {key: 1, label: 'English', value: langs.EN}
                    ]}
                    onChange={(option)=>{
                        this.setState({language: option.value, label: option.label});
                        this.props.changeHandler(option.value);
                    }}>
                    <Text style={styles.button}>{this.state.label}</Text>
                </ModalPicker>
             </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50
    },
    button: {
        color: '#ccc',
        width: 150,
        borderRadius: 3,
        borderColor: '#ccc',
        borderWidth: 2,
        fontSize: 25,
        textAlign: 'center'
    }
});
