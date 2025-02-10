import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const open = () => {
    DateTimePickerAndroid.open({
      accessibilityLabel: "Birthdate",
      "aria-label": "Birthdate",
      "aria-modal": true,
      value: new Date(),
    });
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={open}>
        <Text>Open date-time picker</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
