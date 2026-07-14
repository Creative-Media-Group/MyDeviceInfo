import * as Device from 'expo-device';
import useStyles from '../styles/mystyles';
import { useRouter, useTheme } from 'expo-router';
import { Button, Host, List, ListItem, Text } from "@expo/ui"
import { useState } from 'react';

const DATA = [
  { name: "Manufacturer", value: Device.manufacturer },
  { name: "Modelname", value: Device.modelName },
  { name: "Brand", value: Device.brand },
  { name: "OS Name", value: Device.osName },
  { name: "OS Version", value: Device.osVersion },
  { name: "Platform API level", value: Device.platformApiLevel },
  { name: "Productname", value: Device.productName },
  { name: "Devicename", value: Device.deviceType },
  { name: "Supported CPU architectures", value: Device.supportedCpuArchitectures },
  { name: "Total memory", value: Device.totalMemory }
]
export default function Index() {
  const router = useRouter();
  return (
    <Host
      style={{ flex: 1 }}
    //style={styles.homeview}
    //matchContents={true}
    >
      <List>
        {DATA.map(item => (
          <ListItem
            supportingText={<Text>{item.value?.toString()}</Text>}
            key={item.name}
            onPress={
              () => { }
            }
          >
            {item.name}
          </ListItem>
        ))}
        <ListItem>
          <Button label='Details' onPress={() => { router.push('/details') }} />
        </ListItem>
      </List >
    </Host >
  );
}
