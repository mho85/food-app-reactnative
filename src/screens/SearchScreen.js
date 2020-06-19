import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter((r) => r.price === price);
    }

    return (
        <View style={styles.viewStyle}>
            <SearchBar
                input={searchInput}
                onInputChange={setSearchInput}
                onInputSubmit={() => searchApi(searchInput)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>Found: {results.length} result(s)</Text>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'white'
    }
});

export default SearchScreen;