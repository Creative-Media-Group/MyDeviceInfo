import useIsDarkMode from '@/components/CheckDarkMode';
import mystyles from '@/styles/mystyles';
import * as Device from 'expo-device';
import { Text, View } from "react-native";

export default function Index() {
  const IsDarkMode = useIsDarkMode();
  const styles = mystyles(IsDarkMode);
  return (
    <View
      style={styles.homeview}
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
