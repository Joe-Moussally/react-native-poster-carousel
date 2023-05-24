import { StatusBar } from "expo-status-bar"
import {
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
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar hidden />
      <View style={StyleSheet.absoluteFillObject}>
        {posters.map((poster, index) => (
          <Image
            source={poster}
            key={`backdrop-${index}`}
            style={StyleSheet.absoluteFillObject}
          />
        ))}
      </View>
      <FlatList
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
