import * as Device from 'expo-device';
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Manufacturer: {Device.manufacturer}</Text>
      <Text>Modelname: {Device.modelName}</Text>
      <Text>Brand: {Device.brand}</Text>
      <Text>OS Name: {Device.osName}</Text>
      <Text>OS Version: {Device.osVersion}</Text>
      <Text>Platform API level: {Device.platformApiLevel}</Text>
      <Text>Productname: {Device.productName}</Text>
      <Text>Devicename: {Device.deviceType}</Text>
      <Text>Supported CPU architectures: {Device.supportedCpuArchitectures}</Text>
      <Text>Total memory: {Device.totalMemory}</Text>
    </View>
  );
}
