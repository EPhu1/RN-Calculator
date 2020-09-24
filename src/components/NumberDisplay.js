import React from 'react'
import {StyleSheet, Text, View } from 'react-native';

const NumberDisplay = ({display, operations}) => {
    return(
        <View style = {styles.numberDisplay}>
            <Text style = {styles.operationsStyle}>{operations}</Text>
            <Text style = {styles.displayStyle}>{display}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    numberDisplay: {
        borderWidth: 3,
        borderColor: 'black',
        height: 80,
        marginVertical: 25
    },
    operationsStyle: {
        color: 'gray',
        fontSize: 25,
        alignSelf: "flex-end"
    },
    displayStyle: {
        fontSize: 35,
        alignSelf: "flex-end"
    }
});

export default NumberDisplay;

