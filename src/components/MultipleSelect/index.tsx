import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { palette } from 'theme';
import Text from 'components/Text';
import { Dimensions, View, ViewStyle } from 'react-native';
import styles from './styles';

const icons = {
    search: {
        name: 'search', // search input
        size: 24,
    },
    arrowUp: {
        name: 'keyboard-arrow-up', // dropdown toggle
        size: 22,
    },
    arrowDown: {
        name: 'keyboard-arrow-down', // dropdown toggle
        size: 22,
    },
    selectArrowDown: {
        name: 'keyboard-arrow-down', // select
        size: 35,
    },
    close: {
        name: 'close', // chip close
        size: 16,
    },
    check: {
        name: 'check', // selected item
        size: 25,
    },
    cancel: {
        name: 'cancel', // cancel button
        size: 18,
    },
};

interface Props {
    data: ItemType[];
    label: string;
    style?: ViewStyle;
}

const screenHeight = Dimensions.get('screen').height;
const totalItemFit = screenHeight / 80;

const MultipleSelect = ({ data, label, style }: Props) => {
    const [seletedItems, setSelectedItems] = useState<
        ItemType[] | string[] | number[]
    >([]);
    const shouldFlex = useMemo(() => (data.length || 0) > totalItemFit, [data]);

    return (
        <View style={style}>
            <Text style={styles.label}>{label}</Text>
            <SectionedMultiSelect
                icons={icons}
                items={data}
                modalWithSafeAreaView
                modalWithTouchable
                confirmText="Xác nhận"
                // showCancelButton
                hideConfirm
                expandDropDowns
                animateDropDowns
                single
                // showRemoveAll
                IconRenderer={Icon as unknown as JSX.Element}
                hideSearch
                uniqueKey="name"
                styles={{
                    container: {
                        ...styles.modalContent,
                        flex: shouldFlex ? 1 : undefined,
                    },
                    modalWrapper: styles.modalWrapper,
                    scrollView: { flex: shouldFlex ? 1 : undefined },
                    listContainer: styles.listContainer,
                    item: styles.item,
                    selectToggle: {
                        ...styles.selectToggle,
                    },
                    selectToggleText: styles.selectToggleText,
                    chipsWrapper: styles.chipsWrapper,
                    button: styles.button,
                }}
                colors={{ selectToggleTextColor: '#fff' }}
                // subKey="children"
                selectText="Chọn giá trị ..."
                selectedText="đã chọn"
                showDropDowns
                // readOnlyHeadings
                onSelectedItemsChange={(items) => {
                    setSelectedItems(items);
                }}
                selectedItems={seletedItems}
            />
        </View>
    );
};

export default MultipleSelect;
