import React from 'react';
import Screen from 'components/Screen';
import Header from 'components/Header';
import { useBackButton } from '../useBackButton';

const MyBook = () => {
    useBackButton();
    return (
        <Screen
            preset="scroll"
            customHeader={<Header title="Kệ sách" isHideBack />}
        />
    );
};

export default MyBook;
