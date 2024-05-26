import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Prabir Singh',
      status: 'Just a motivator',
      imageUrl:
        'https://as2.ftcdn.net/v2/jpg/04/43/76/95/1000_F_443769563_XLcCTl78ajnm9VS6kEWFIEMHRMUdm26Z.jpg',
    },
    {
      uid: 2,
      name: 'Neel Singh',
      status: 'Student of the year',
      imageUrl:
        'https://as1.ftcdn.net/v2/jpg/06/97/12/92/1000_F_697129245_3FW9cUlQfhS0NtUKRlnh0DBYdfgSKeTW.jpg',
    },
    {
      uid: 3,
      name: 'Jaya Singh',
      status: 'Astrologer mother',
      imageUrl:
        'https://as2.ftcdn.net/v2/jpg/06/37/07/13/1000_F_637071302_wz8ude7CUHwBrEvRLHqlo4h57SspvSNB.jpg',
    },
    {
      uid: 4,
      name: 'Chander Chandel',
      status: 'Cyclist of the era',
      imageUrl:
        'https://as1.ftcdn.net/v2/jpg/06/61/72/24/1000_F_661722459_ib6yDSeinRfAr5m816wl4X9Pxm28xLWP.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#004497',
    padding: 8,
    borderRadius: 8,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  userStatus: {
    fontSize: 12,
    color: '#e7e7e7',
  },
});
