import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [searchInput, setSearchInput] = useState('');

    return (
        <View style={styles.viewStyle}>
            <SearchBar
                input={searchInput}
                onInputChange={(t) => setSearchInput(t)}
                onInputSubmit={() => console.log("Lancer la recherche à partir du mot " + searchInput)}
            />
            {/* <Text>{searchInput}</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'white'
    }
});

export default SearchScreen;