import React, { useRef } from 'react';
import { TextInput, TouchableOpacity, View, ViewStyle } from 'react-native';
import { palette } from 'theme';
import strings from 'locale';
import SearchIcon from 'images/svg/SearchIcon';
import styles from './styles';

interface Props {
    placeholder?: string;
    defaultValue?: string;
    editable?: boolean;
    onChangeText?: (text: string) => void;
    onSearch?: (text: string) => void;
    onBlur?: () => void;
    onPressSearch?: () => void;
    style?: ViewStyle;
}

const Search = (props: Props) => {
    const textRef = useRef<string>('');

    const handleOnChangeText = (txt: string) => {
        textRef.current = txt;
        props?.onChangeText?.(txt);
    };

    const handleOnSearch = () => {
        if (props?.editable !== false) {
            props?.onSearch?.(textRef.current);
        } else {
            props?.onPressSearch?.();
        }
    };

    const onTouchStart = () => {
        if (props?.editable === false) {
            props?.onPressSearch?.();
        }
    };

    return (
        <TouchableOpacity onPress={onTouchStart} style={[props.style]}>
            <View style={[styles.wrapperSearch]}>
                <TextInput
                    style={styles.inputSearch}
                    placeholderTextColor={palette.lighterGrey}
                    placeholder={
                        props.placeholder || strings.COMMON.searchStory
                    }
                    defaultValue={props.defaultValue}
                    editable={props.editable !== false}
                    numberOfLines={1}
                    onChangeText={handleOnChangeText}
                    onBlur={() => props.onBlur}
                    returnKeyType="search"
                    onTouchStart={onTouchStart}
                    onSubmitEditing={handleOnSearch}
                />
                <TouchableOpacity
                    style={styles.buttonSearch}
                    activeOpacity={0.5}
                    onPress={handleOnSearch}>
                    <SearchIcon onClick={handleOnSearch} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};
export default Search;
