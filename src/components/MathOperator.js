import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

const MathOperator = ({operation, display, setDisplay, operations, setOperations}) => {
    const handleOperation = (operation) => {
        const operatorOptions = ['+', '.', '-', '/', '*', '='];

        if(operation != '='){
            operatorOptions.pop();
        }
        if(operations.length == 0 || operatorOptions.includes(operations[operations.length - 1])){
            return false;
        }
        else{
            return true;
        }
    };

    if(operation == 'C'){
        return(
            <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {
                setDisplay('0');
                setOperations([]);
            }}>
                <Text style = {styles.textStyle}>C</Text>
            </TouchableOpacity>
        )
    }
    else if(operation == '.'){
        return(
            <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {
                if(operations.length == 0){ //if there is no input, we can use '.'
                    setOperations([operation]);
                    setDisplay(display + '.' );
                    return;
                }
                if(operations.includes(operation) == false){ //if we never used '.' we can use '.'
                    setOperations([...operations, operation]);
                    setDisplay(display + '.' );
                }
                const operatorOptions = ['+', '-', '/', '*', '=', '.'];
                for(var i = operations.length - 1; i > 0; i--){ //checking the operations array from the end to the beginning. If we find a '.' before an operator then we cannot use '.'
                    if(operations[i] == '.'){
                        return;
                    }
                    else if(operatorOptions.includes(operations[i])){
                        if(operations[operations.length - 1] == '='){
                            setOperations([operation]);
                            setDisplay('.');
                        }
                        else{
                            setOperations([...operations, operation]);
                            setDisplay(display + '.' );
                        }
                        return;
                    }
                }
                
            }}>
                <Text style = {styles.textStyle}>{operation}</Text> 
            </TouchableOpacity>
        )
    }

    else if(operation == '='){
        return(
            <TouchableOpacity style = {styles.equalStyle} onPress = {() => {
                if(handleOperation('=')){
                    var total = eval(operations.slice(0, operations.length).join(''));
                    setDisplay(parseFloat((total).toFixed(9)));
                    setOperations([...operations, '=']);
                }
            }}>
                <Text style = {styles.textStyle}>=</Text>
            </TouchableOpacity>
        )
    }

    else{
        return(
            <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {
                if(handleOperation({operation})){
                    operations[operations.length - 1] == '=' ? setOperations([display.toString(), operation]) :  setOperations([...operations, operation]);
                    setDisplay('0');
                }          
            }}>
                <Text style = {styles.textStyle}>{operation}</Text> 
            </TouchableOpacity>
        )
    }
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
        marginTop: 14,
        fontSize: 20
    },
    equalStyle: {
        height: 60,
        backgroundColor: '#00FFFF',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        margin: 10,
    }
});

export default MathOperator;