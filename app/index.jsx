import React from 'react';
import { View,Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import {Link} from "expo-router";

const RootLayout = () => {
    return (
        <View className="flex-1 items-center justify-center bg-white ">
            <Text className="text-3xl font-pblack">Aora!</Text>
            <StatusBar style="auto" />
            <Link href='/home'>Go to Home</Link>
        </View>
    );
};

export default RootLayout;