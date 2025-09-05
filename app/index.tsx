import isDarkMode from '@/components/CheckDarkMode';
import * as Device from 'expo-device';
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: isDarkMode() ? "white" : "black" }}>Manufacturer: {Device.manufacturer}</Text>
      <Text style={{ color: isDarkMode() ? "white" : "black" }}>Modelname: {Device.modelName}</Text>
      <Text style={{ color: isDarkMode() ? "white" : "black" }}>Brand: {Device.brand}</Text>
      <Text style={{ color: isDarkMode() ? "white" : "black" }}>OS Name: {Device.osName}</Text>
      <Text style={{ color: isDarkMode() ? "white" : "black" }}>OS Version: {Device.osVersion}</Text>
      <Text style={{ color: isDarkMode() ? "white" : "black" }}>Platform API level: {Device.platformApiLevel}</Text>
      <Text style={{ color: isDarkMode() ? "white" : "black" }}>Productname: {Device.productName}</Text>
      <Text style={{ color: isDarkMode() ? "white" : "black" }}>Devicename: {Device.deviceType}</Text>
      <Text style={{ color: isDarkMode() ? "white" : "black" }}>Supported CPU architectures: {Device.supportedCpuArchitectures}</Text>
      <Text style={{ color: isDarkMode() ? "white" : "black" }}>Total memory: {Device.totalMemory}</Text>
    </View>
  );
}
