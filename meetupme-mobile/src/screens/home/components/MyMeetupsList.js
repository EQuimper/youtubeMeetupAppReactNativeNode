import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles/MyMeetupsList';

const MyMeetupsList = ({ meetups }) => (
  <View style={styles.root}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>My Meetups</Text>
    </View>
    <View style={styles.contentContainer}>
      <ScrollView horizontal>
        {meetups.map((meetup, i) => (
          <View key={i} style={styles.meetupCard}>
            <View style={styles.meetupCardTopContainer}>
              <Text style={styles.meetupCardTitle}>
                {meetup.title}
              </Text>
            </View>

            <View style={styles.meetupCardBottomContainer}>
              <Text style={styles.meetupCardMetaName}>
                {meetup.group.name}
              </Text>
              <Text style={styles.meetupCardMetaDate}>
                Mar 2m 6:00pm
              </Text>
            </View>

          </View>
        ))}
      </ScrollView>
    </View>
  </View>
);

export default MyMeetupsList;

