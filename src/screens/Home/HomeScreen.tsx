import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AppDropdown from '../../components/Dropdown';
import { HoroscopeDataType, HOROSCOPES } from './constants';
import { fetchHoroscope } from '../../services';

export default function HomeScreen() {
  const [selectedHoroscope, setSelectedHoroscope] = useState<any>(null);
  const [horoscopeData, setHoroscopeData] = useState<HoroscopeDataType | null>(
    null,
  );

  const navigation = useNavigation<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchHoroscope(selectedHoroscope?.name);
        setHoroscopeData(res?.data);
      } catch (error) {
        console.error('Error fetching horoscope:', error);
      }
    };
    fetchData();
  }, [selectedHoroscope]);

  return (
    <View style={styles.container}>
      <View>
        <AppDropdown
          items={HOROSCOPES}
          dataKey="name"
          onSelectItem={item => {
            console.log('>>>item', item);
            setSelectedHoroscope(item);
          }}
          selected={selectedHoroscope}
        />
      </View>
      <View>
        <Image
          source={{
            uri: selectedHoroscope?.uri,
          }}
          style={{ height: 200, width: 200, resizeMode: 'contain' }}
        />
      </View>
      <View style={{ alignItems: 'center', padding: 16 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 8 }}>
          {horoscopeData?.date}
        </Text>
        <Text style={{ fontSize: 16 }}>{horoscopeData?.horoscope_data}</Text>
      </View>
      <TouchableOpacity
        style={{
          borderColor: '#007AFF',
          borderWidth: 1,
          padding: 12,
          borderRadius: 8,
          marginTop: 16,
        }}
        onPress={() => {
          // Handle button press
          navigation.navigate('Journal');
        }}
      >
        <Text style={{ color: '#007AFF', fontWeight: 'bold' }}>
          Write Journal
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 20,
  },
});
