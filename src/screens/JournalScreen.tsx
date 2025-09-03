import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppText from '../components/AppText';
import Icon from '../components/Icon';
import AppInput from '../components/AppInput';

interface Journal {
  id: string;
  title: string;
  date: string;
  description: string;
}

export default function JournalScreen() {
  const [previousJournals, setPreviousJournals] = useState<Journal[]>([]);
  const [showJournalModal, setShowJournalModal] = useState(false);
  const [createNewJournal, setCreateNewJournal] = useState(false);
  const [selectedJournal, setSelectedJournal] = useState<Journal | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  // Load journals from AsyncStorage on component mount
  useEffect(() => {
    const loadJournals = async () => {
      try {
        const savedJournals = await AsyncStorage.getItem('@journals');
        if (savedJournals) {
          setPreviousJournals(JSON.parse(savedJournals));
        }
      } catch (error) {
        console.error('Error loading journals:', error);
        Alert.alert('Error', 'Failed to load your journals');
      }
    };
    loadJournals();
  }, []);

  // Save journals to AsyncStorage whenever they change
  useEffect(() => {
    const saveJournals = async () => {
      try {
        await AsyncStorage.setItem(
          '@journals',
          JSON.stringify(previousJournals),
        );
      } catch (error) {
        console.error('Error saving journals:', error);
        Alert.alert('Error', 'Failed to save your journal');
      }
    };
    saveJournals();
  }, [previousJournals]);

  const renderItem = ({ item }: { item: Journal }) => (
    <TouchableOpacity
      style={styles.journalItem}
      onPress={() => {
        setSelectedJournal(item);
        setShowJournalModal(true);
      }}
    >
      <View style={styles.journalContent}>
        <AppText style={styles.journalTitle}>{item.title}</AppText>
        <AppText style={styles.journalDate}>{item.date}</AppText>
      </View>
      <Icon name="chevron-right" size={20} color="black" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={previousJournals}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          setSelectedJournal(null);
          setCreateNewJournal(true);
        }}
      >
        <Icon name="plus" size={24} color="white" />
      </TouchableOpacity>
      <Modal
        visible={showJournalModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowJournalModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <AppText style={styles.modalTitle}>
                {selectedJournal?.title}
              </AppText>
              <TouchableOpacity
                style={styles.modalCloseIcon}
                onPress={() => setShowJournalModal(false)}
              >
                <Icon name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>
            <AppText style={styles.modalDate}>
              Date: {selectedJournal?.date}
            </AppText>
            <AppText style={styles.modalDescription}>
              {selectedJournal?.description}
            </AppText>
          </View>
        </View>
      </Modal>
      <Modal
        visible={createNewJournal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setCreateNewJournal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <AppText style={styles.modalTitle}>New Journal Entry</AppText>
              <TouchableOpacity
                style={styles.modalCloseIcon}
                onPress={() => setCreateNewJournal(false)}
              >
                <Icon name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>
            <AppText style={styles.modalDate}>
              Date: {new Date().toISOString().slice(0, 10)}
            </AppText>
            {/* Simple form for demonstration */}
            <View style={{ marginBottom: 12 }}>
              <AppText style={{ marginBottom: 4 }}>Title</AppText>
              <View style={{ backgroundColor: '#f8f8f8', borderRadius: 8 }}>
                <AppInput
                  placeholder="Enter title"
                  value={newTitle}
                  onChangeText={input => {
                    setNewTitle(input);
                  }}
                  style={{ padding: 8 }}
                />
              </View>
            </View>
            <View style={{ marginBottom: 12 }}>
              <AppText style={{ marginBottom: 4 }}>Description</AppText>
              <View style={{ backgroundColor: '#f8f8f8', borderRadius: 8 }}>
                <AppInput
                  placeholder="Enter description"
                  value={newDescription}
                  onChangeText={input => {
                    setNewDescription(input);
                  }}
                  style={{ padding: 8, height: 80 }}
                  multiline
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#007AFF',
                borderRadius: 8,
                paddingVertical: 12,
                alignItems: 'center',
              }}
              onPress={() => {
                if (!newTitle.trim() || !newDescription.trim()) {
                  Alert.alert(
                    'Error',
                    'Please fill in both title and description',
                  );
                  return;
                }
                const newJournal = {
                  id: Date.now().toString(), // Using timestamp as id for uniqueness
                  title: newTitle.trim(),
                  description: newDescription.trim(),
                  date: new Date().toISOString().slice(0, 10),
                };
                setPreviousJournals(prev => [newJournal, ...prev]); // Add new journal at the beginning
                setNewTitle('');
                setNewDescription('');
                setCreateNewJournal(false);
              }}
            >
              <AppText style={{ color: 'white', fontWeight: '600' }}>
                Save
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  journalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginBottom: 12,
  },
  journalContent: {
    flex: 1,
  },
  journalTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  journalDate: {
    fontSize: 14,
    color: '#666',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  modalCloseIcon: {
    padding: 4,
  },
  modalDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  modalDescription: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});
