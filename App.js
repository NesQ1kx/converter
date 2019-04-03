import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Input} from 'react-native-elements';
import ChangeLang from './components/ChangeLang';
import * as langs from './shared/Langs';
import * as types from './shared/Types'
import ChooseType from "./components/ChooseType";
import ConvertedValues from "./components/ConvertedValues";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: langs.EN,
            currentType: types.TYPES[0].code,
            currentValue: 1
        }
    }

    setLanguage(lang) {
        this.setState({
            language: lang
        });
    }

    setType(type) {
        this.setState({
            currentType: type
        })
    }

    setCurrentValue(value) {
        this.setState({
            currentValue: value
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ChangeLang language={this.state.language}
                                changeHandler={this.setLanguage.bind(this)}/>
                    <Input keyboardType='numeric'
                           style={styles.input}
                           value={String(this.state.currentValue)}
                           onChangeText={(text) => this.setCurrentValue(text)}/>
                    <ChooseType initType={this.state.currentType}
                                language={this.state.language}
                                changeHandler={this.setType.bind(this)}/>
                    <ConvertedValues language={this.state.language}
                                     code={this.state.currentType}
                                     value={this.state.currentValue}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
});
