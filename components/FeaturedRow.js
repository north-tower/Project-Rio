import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import tw from "tailwind-react-native-classnames"
import ResturantCard from './ResturantCard'

const FeaturedRow = ({id, title, description }) => {
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-lg`}>
            {title}
        </Text>
        <ArrowRightIcon color="#00bbcc" />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>
      <ScrollView horizontal contentContainerStyle={{
        paddingHorizontal: 15,
      }} showsHorizontalScrollIndicator={false} style={tw`pt-4`} >
        <ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1509732344995-2397751a0061?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9saWNlJTIwc3RhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
         title="Police Stations" rating={4.5} genre="European"  
         short_description="Police stations serve as essential hubs for law enforcement, ensuring public safety and upholding justice within communities. They provide a vital link between citizens and law enforcement officers, offering support, resources, and a sense of security to residents." 
         dishes={[
          {
            name: "Juja Police",
            description: "Ready to serve.",
            price: 12.99,
            id: "1",
            image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZXJuJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          },
          {
            name: "DCI Juja",
            description: "Best in the game.",
            price: 9.99,
            id: "2",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
        ]}
          long={10} lat={0} address={78}/>
         <ResturantCard id={14} imgUrl="https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJ1c3RpYyUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
         title="Rustic" rating={7.5} genre="Earthy"
         short_description=" Rustic design embraces a warm, earthy feel with natural materials, exposed wood, and a cozy, country-inspired atmosphere." 
        dishes ={[
  {
    name: "Rustic Living Room",
    description: "Step into a cozy and inviting rustic living room with warm wooden accents and earthy tones.",
    id: "3",
    image: "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Rustic Kitchen",
    description: "Experience the charm of a rustic kitchen with vintage elements and natural textures. ",
    price: 10.99,
    id: "4",
    image: "https://images.unsplash.com/photo-1540809799-5da9372c3f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJ1c3RpYyUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
]}
long={10} lat={0} />


      </ScrollView>
    </View>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({})