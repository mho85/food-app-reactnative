import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ input, onInputChange, onInputSubmit }) => {
    const [searchInput, setSearchInput] = useState('');

    return (
        <View style={styles.background}>
            <Ionicons name="ios-search" style={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle}
                value={input}
                onChangeText={onInputChange}
                placeholder="Search"
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={onInputSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        marginVertical: 15,
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        display: "flex",
        flexDirection: "row"
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        color: 'black',
        marginHorizontal: 15,
        alignSelf: "center"
    }
});

export default SearchBar;