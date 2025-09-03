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
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppDropdown from '../../components/Dropdown';
import { HoroscopeDataType, HOROSCOPES } from './constants';
import { fetchHoroscope } from '../../services';

export default function HomeScreen() {
  const [selectedHoroscope, setSelectedHoroscope] = useState<any>(null);
  const [horoscopeData, setHoroscopeData] = useState<HoroscopeDataType | null>(
    null,
  );

  const navigation = useNavigation<any>();

  // Load saved horoscope on initial render
  useEffect(() => {
    const loadSavedHoroscope = async () => {
      try {
        const savedHoroscope = await AsyncStorage.getItem(
          '@selected_horoscope',
        );
        if (savedHoroscope) {
          setSelectedHoroscope(JSON.parse(savedHoroscope));
        }
      } catch (error) {
        console.error('Error loading saved horoscope:', error);
      }
    };
    loadSavedHoroscope();
  }, []);

  // Save horoscope whenever it changes
  const saveHoroscope = async () => {
    try {
      if (selectedHoroscope) {
        await AsyncStorage.setItem(
          '@selected_horoscope',
          JSON.stringify(selectedHoroscope),
        );
      }
    } catch (error) {
      console.error('Error saving horoscope:', error);
    }
  };

  // Fetch horoscope data when selected horoscope changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchHoroscope(selectedHoroscope?.name);
        setHoroscopeData(res?.data);
      } catch (error) {
        console.error('Error fetching horoscope:', error);
      }
    };
    if (selectedHoroscope) {
      fetchData();
    }
    saveHoroscope();
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
