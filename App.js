import { StatusBar } from "expo-status-bar"
import { useRef } from "react"
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native"

const posters = [
  require("./posters/poster-1.webp"),
  require("./posters/poster-2.jpeg"),
  require("./posters/poster-3.jpeg"),
  require("./posters/poster-4.webp"),
  require("./posters/poster-5.webp")
]

const { width, height } = Dimensions.get("screen")
const imageWidth = width * 0.7
const imageHeight = height * 0.5

export default function App() {
  const scrollX = useRef(new Animated.Value(0)).current

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar style="light" />
      <View style={[StyleSheet.absoluteFillObject]}>
        {posters.map((poster, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width
          ]
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0]
          })
          return (
            <Animated.Image
              source={poster}
              key={`backdrop-${index}`}
              style={[
                StyleSheet.absoluteFillObject,
                { opacity, width, height }
              ]}
              blurRadius={42}
            />
          )
        })}
      </View>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        data={posters}
        key={(_, index) => index.toString}
        horizontal
        pagingEnabled
        renderItem={({ item: poster }) => (
          <View
            style={{
              width,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={poster}
              style={{
                width: imageWidth,
                height: imageHeight,
                resizeMode: "cover",
                borderRadius: 28
              }}
            />
          </View>
        )}
      />
    </View>
  )
}
