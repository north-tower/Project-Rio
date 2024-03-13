import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from "tailwind-react-native-classnames"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
// import { UserIcon, ChevronDownIcon } from "react-native-heroicons/outline"
import FeaturedRow from './components/FeaturedRow';
import { AdjustmentsHorizontalIcon } from 'react-native-heroicons/solid';
import  { MagnifyingGlassCircleIcon } from 'react-native-heroicons/solid';
import {CameraIcon } from 'react-native-heroicons/solid';
import { ScrollView } from 'react-native';
import  Categories from "./components/Categories"
// import FeaturedRow2 from '../components/FeaturedRow2'
// import FeaturedRow3 from '../components/FeaturedRow3';

export default function App() {
  return (
    <SafeAreaView style={tw`bg-white pt-5`}>
       <View style={tw`flex-row items-center pb-2 mx-4`}>
            <View style={tw`flex-row flex-1 bg-gray-200 p-3 rounded-full `}>
                <MagnifyingGlassCircleIcon color="gray"  />
                <TextInput placeholder='Interior Design' />
            </View>

            <AdjustmentsHorizontalIcon  color="#00CCBB" />
        </View>
        <ScrollView style={tw`bg-gray-100`} contentContainerStyle={{ paddingBottom: 100,}}>
            <Categories />
            <FeaturedRow title="Traditional and Classic" description="Features timeless elegance, rich textures, and refined elements that evoke a sense of history and sophistication."
            id="1" />

        </ScrollView>
      
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



