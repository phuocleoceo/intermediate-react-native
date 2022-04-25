import { Appbar } from 'react-native-paper';
import React from "react";


export default function AppBar({ title })
{
    return (
        <Appbar.Header>
            <Appbar.Content title={title} />
        </Appbar.Header>
    );
}