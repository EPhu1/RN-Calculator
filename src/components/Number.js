import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const Number = ({number, display, setDisplay, operations, setOperations}) => {
    const operatorOptions = ['+',  '-', '%', '*', '='];
    const handleNumber = () => {
        if(operations.length == 0 && number == '0') return;
        else if(number == '0' && operatorOptions.includes(operations[operations.length - 1])){
            return;
        }
        else if(operations[operations.length - 1] == '='){
            setDisplay(number);
            setOperations([number]);
        }
        else{
            display == '0' ? setDisplay(number): setDisplay(display + number)
            setOperations([...operations, number]);
        }
    }

    return(
        <TouchableOpacity style = {styles.buttonStyle} title = {number} onPress = {() => handleNumber()}>
            <Text style = {styles.textStyle}>{number}</Text> 
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    buttonStyle: {
        width: 60,
        height: 60,
        backgroundColor: '#00FFFF',
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        borderRadius: 50
    },
    textStyle: {
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20
    }
});

export default Number;