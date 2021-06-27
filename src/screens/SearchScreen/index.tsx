import React, { useState } from 'react';
import Screen from 'components/Screen';
import Search from 'components/Search';
import Header from 'components/Header';
import { View } from 'react-native';
import Text from 'components/Text';
import SearchEmptyIcon from 'images/svg/SearchEmptyIcon';
import styles from './styles';

const SearchScreen = () => {
    const [searchResult] = useState<[] | undefined>();

    return (
        <Screen customHeader={<Header title="Tìm Truyện" />} preset="fixed">
            <View style={styles.wrapper}>
                <Search placeholder="Nhập tên truyện" />
                {searchResult?.length == 0 ? (
                    <View style={styles.emptyView}>
                        <SearchEmptyIcon width={100} height={100} />
                        <Text style={styles.textEmpty}>Không có dữ liệu</Text>
                    </View>
                ) : (
                    <View />
                )}
            </View>
        </Screen>
    );
};

export default SearchScreen;
