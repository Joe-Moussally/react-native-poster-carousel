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
const imageHeight = height * 1.54

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar hidden />
      <FlatList
        data={posters}
        key={(_, index) => index.toString}
        horizontal
        pagingEnabled
        renderItem={({ item: poster }) => (
          <Image
            source={poster}
            style={{
              width: imageWidth,
              height: imageWidth,
              resizeMode: "cover"
            }}
          />
        )}
      />
    </View>
  )
}
