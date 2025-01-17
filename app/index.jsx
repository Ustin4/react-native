import {SafeAreaView} from "react-native-safe-area-context";
import {ScrollView, View, Image, Text} from "react-native";
import {images} from '../constants'
import CustomButton from "../component/CustomButton";

import '../global.css'
import {StatusBar} from "expo-status-bar";
import {router} from "expo-router";

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className='w-full justify-center items-center min-h-[85vh] px-4'>
                    <Image className='w-[130px] h-[84px]'
                           resizeMode='contain'
                           source={images.logo}/>
                    <Image source={images.cards}
                           className="max-w-[380px] w-full h-[300px] "
                           resizeMode="contain"
                    />
                    <View className='relative mt-5'>
                        <Text className='text-3xl text-white font-bold text-center'>Discover Endless Possibilities
                            with {''} <Text className="text-secondary-200">Aora</Text>
                        </Text>
                        <Image source={images.path}
                               className='w-[159px] h-[15px] absolute -bottom-2 -right-3  '
                               resizeMode='contain'
                        />
                    </View>
                    <Text className='text-sm font-pregular mt-7 text-center text-gray-100'>
                        Where creativity meets innovation: embark on a journey of limitless exploration with
                        Aora</Text>
                    <CustomButton
                        title='Contineu with Email'
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-full mt-7"
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light'/>
        </SafeAreaView>
    );
};


