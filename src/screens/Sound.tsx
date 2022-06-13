import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  stylesB,
  stylesL,
  stylesM,
  stylesO,
  stylesS,
} from "./../appTheme/styles/styles";
import { Audio } from "expo-av";

const Sound = () => {
  const [sound, setSound] = React.useState();
  const [recording, setRecording] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("./../../assets/audio/transaction.mp3"),
      { shouldPlay: true }
    );
    setSound(sound);
    console.log("Playing Sound");
    await sound.playAsync();
  }
  //   async function stopRecording() {
  //     console.log("Stopping recording..");
  //     setRecording(undefined);
  //     await recording.stopAndUnloadAsync();
  //     const uri = recording.getURI();
  //     console.log("Recording stopped and stored at", uri);
  //   }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <SafeAreaView style={stylesB.body}>
      <TouchableOpacity
        style={{
          marginTop: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "green",
        }}
        onPress={playSound}
      >
        <Text>PLAY</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Sound;
