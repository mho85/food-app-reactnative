import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return (
        <View style={styles.viewStyle}>
            <SearchBar
                input={searchInput}
                onInputChange={setSearchInput}
                onInputSubmit={() => searchApi(searchInput)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>Found: {results.length} result(s)</Text>
            <ResultsList />
            <ResultsList />
            <ResultsList />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'white'
    }
});

export default SearchScreen;