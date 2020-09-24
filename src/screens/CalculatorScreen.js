//look at bottom for notes.
import React , {useState} from 'react';
import { TouchableOpacity, Button, StyleSheet, Text, View } from 'react-native';
import Number from '../components/Number';
import NumberDisplay from '../components/NumberDisplay';
import MathOperator from '../components/MathOperator';

const CalculatorScreen = () => {
    var [display, setDisplay] = useState('0');
    var [operations, setOperations] = useState([]);

    return <View style = {{marginHorizontal: 25}}>
        <NumberDisplay operations = {operations} display = {display} />

        <View style = {styles.rowStyle}>
            <Number number = '1' display = {display} setDisplay = {(newNumber) => setDisplay(newNumber)} operations = {operations} setOperations = {(newOperation) => setOperations(newOperation)}/>
            <Number number = '2' display = {display} setDisplay = {(newNumber) => setDisplay(newNumber)} operations = {operations} setOperations = {(newOperation) => setOperations(newOperation)}/>
            <Number number = '3' display = {display} setDisplay = {(newNumber) => setDisplay(newNumber)} operations = {operations} setOperations = {(newOperation) => setOperations(newOperation)}/>
            <MathOperator operation = '/' display = {display} setDisplay = {(newNumber) => setDisplay(newNumber)} operations = {operations} setOperations = {(newOperation) => setOperations(newOperation)}/>
        </View>

        <View style = {styles.rowStyle}>
            <Number number = '4' display = {display} setDisplay = {(newNumber) => setDisplay(newNumber)} operations = {operations} setOperations = {(newOperation) => setOperations(newOperation)}/>
            <Number number = '5' display = {display} setDisplay = {(newNumber) => setDisplay(newNumber)} operations = {operations} setOperations = {(newOperation) => setOperations(newOperation)}/>
            <Number number = '6' display = {display} setDisplay = {(newNumber) => setDisplay(newNumber)} operations = {operations} setOperations = {(newOperation) => setOperations(newOperation)}/>
            <MathOperator operation = '*' display = {display} setDisplay = {(newNumber) => setDisplay(newNumber)} operations = {operations} setOperations = {(newOperation) => setOperations(newOperation)}/>
        </View>

        <View style = {styles.rowStyle}>
            <Number number = '7' display = {display} setDisplay = {(newNumber) => setDisplay(newNumber)} operations = {operations} setOperations = {(newOperation) => setOperations(newOperation)}/>
            <Number number = '8' display = {display} setDisplay = {(newNumber) => setDisplay(newNumber)} operations = {operations} setOperations = {(newOperation) => setOperations(newOperation)}/>
            <Number number = '9' display = {display} setDisplay = {(newNumber) => setDisplay(newNumber)} operations = {operations} setOperations = {(newOperation) => setOperations(newOperation)}/>
            <MathOperator operation = '-' display = {display} setDisplay = {(newNumber) => setDisplay(newNumber)} operations = {operations} setOperations = {(newOperation) => setOperations(newOperation)}/>
        </View>

        <View style = {styles.rowStyle}>
            <MathOperator operation = 'C' setDisplay = {(newNumber) => setDisplay(newNumber)} operations = {operations} setOperations = {(newOperation) => setOperations(newOperation)}/>
            <Number number = '0' display = {display} setDisplay = {(newNumber) => setDisplay(newNumber)} operations = {operations} setOperations = {(newOperation) => setOperations(newOperation)}/>
            <MathOperator operation = '.' display = {display} setDisplay = {(newNumber) => setDisplay(newNumber)} operations = {operations} setOperations = {(newOperation) => setOperations(newOperation)}/>
            <MathOperator operation = '+' display = {display} setDisplay = {(newNumber) => setDisplay(newNumber)} operations = {operations} setOperations = {(newOperation) => setOperations(newOperation)}/>
        </View>
        
        <MathOperator operation = '=' display = {display} setDisplay = {(newNumber) => setDisplay(newNumber)} operations = {operations} setOperations = {(newOperation) => setOperations(newOperation)}/>
        
        <Text style = {{textAlign: 'center'}}>Made by Evan P</Text>
    </View>
}

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row'
    }
});

export default CalculatorScreen;


//eval('') evalulates a mathematical operation as a string
//str.slice() exists in js
//array.join('') puts an array together as a string separated by nothing. array.join() separates the elements by ',' by default.
// My First approach to making a button. Saves lines of code, but does not use Components.
    // const handleNumber = (numberAsString) => {
    //     if(operations[operations.length - 1] == '='){
    //         setDisplay(numberAsString);
    //         setOperations([numberAsString]);
    //     }
    //     else{
    //         display == '0' ? setDisplay(numberAsString): setDisplay(numberAsString + display)
    //         setOperations([...operations, numberAsString]);
    //     }
    // }
    // {<Button title = '1' onPress = {() => handleNumber('1')}/>}
//To pass a state function to a Component, I need to add a parameter as needed. setDisplay = {(newNumber) => setDisplay(newNumber)} 
//parseFloat((total).toFixed(4)) rounds to the 4th decimal spot