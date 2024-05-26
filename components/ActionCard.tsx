import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Recent News</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.container}>
          <Text style={styles.containerHeading}>
            What's new in JavaScript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1613294983676/841x71jGr.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={3}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
          </Text>
          <View style={styles.cardFooter}>
            <TouchableOpacity
              onPress={() => {
                openWebsite(
                  'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
                );
              }}>
              <Text style={styles.commonLinks}>Read more</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                openWebsite('https://blog.learncodeonline.in/');
              }}>
              <Text style={styles.commonLinks}>Follow Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 310,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 'auto',
  },
  cardElevated: {
    backgroundColor: '#ffe6b8',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333333',
    shadowOpacity: 0.3,
  },
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHeading: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 150,
  },
  cardBody: {
    padding: 10,
  },
  cardFooter: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  commonLinks: {
    fontSize: 14,
    backgroundColor: '#ff7300',
    paddingHorizontal: 16,
    paddingVertical: 4,
    color: '#ffffff',
    borderRadius: 4,
  },
});
