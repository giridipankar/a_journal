import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import Icon from './Icon';
import AppText from './AppText';

interface ItemSelectorModalProps {
  onClose?: (item: any | null) => void;
  items: any[];
  dataKey: string;
  selected?: any;
  postfix?: string;
  label?: string;
  onSelectItem?: (item: any) => void;
}

const AppDropdown: React.FC<ItemSelectorModalProps> = ({
  onClose = () => {},
  items,
  dataKey,
  selected,
  postfix = '',
  label,
  onSelectItem = () => {},
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleSelect = (item: any) => {
    setIsVisible(false);
    onSelectItem(item);
  };

  const handleConfirm = () => {
    onClose(selected);
  };

  return (
    <View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <AppText style={styles.title}>
              {label || 'Select your zodiac sign'}
            </AppText>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsVisible(false)}
            >
              <Icon name="close" size={25} color="black" />
            </TouchableOpacity>
            <FlatList
              data={items}
              keyExtractor={item => item[dataKey]?.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.listItem,
                    selected &&
                      selected[dataKey] === item[dataKey] &&
                      styles.selectedItem,
                  ]}
                  onPress={() => handleSelect(item)}
                >
                  <AppText>{item[dataKey]}</AppText>
                  <Icon name="chevron-right" size={20} color="black" />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.dropdownContainer}>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setIsVisible(true)}
        >
          <AppText
            style={[
              styles.dropdownText,
              { color: selected?.[dataKey] ? 'black' : 'gray' },
            ]}
          >
            {selected?.[dataKey] || 'Select your zodiac sign'}{' '}
            {selected?.[dataKey] && (
              <AppText color={'gray'}>{' ' + postfix}</AppText>
            )}
          </AppText>
          <Icon name="chevron-down" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 16,
    width: '95%',
    marginBottom: 16,
    maxHeight: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  selectedItem: {
    backgroundColor: '#007bff5d',
  },
  closeButton: {
    position: 'absolute',
    right: 12,
    top: 12,
    alignItems: 'flex-end',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  dropdownContainer: {
    // No extra styles needed, but kept for structure
  },
  dropdownButton: {
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 14,
  },
});

export default AppDropdown;
