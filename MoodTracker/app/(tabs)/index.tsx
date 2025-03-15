import {StyleSheet,View, FlatList} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MoodBar from '@/components/MoodBar';
interface CalendarItem {
  day: string;
  date: number;
  mood: string | null;
  isToday?: boolean;
}

interface MoodChartItem {
  time: string;
  mood: string;
  height: number;
}

export default function HomeScreen() {
// Mock Data
  const calendarData: CalendarItem[] = [
    { day: 'Thu', date: 1, mood: '😊' },
    { day: 'Fri', date: 2, mood: '😊' },
    { day: 'Sat', date: 3, mood: '😊' },
    { day: 'Sun', date: 4, mood: '😊', isToday: true },
    { day: 'Mon', date: 5, mood: null },
    { day: 'Tue', date: 6, mood: null },
    { day: 'Wed', date: 7, mood: null },
  ];

  const moodChartData: MoodChartItem[] = [
    { time: '10:08', mood: '😊', height: 60 },
    { time: '12:10', mood: '😐', height: 40 },
    { time: '14:40', mood: '😢', height: 20 },
    { time: '18:30', mood: '😊', height: 60 },
    { time: '20:10', mood: '😢', height: 20 },
  ];

  return (
    <View style={styles.container}>
      {/* ส่วนทักทาย */}
      <ThemedView style={styles.headerContainer}>
        <ThemedText style={styles.greetingText}>
          Hey, User! 👋
        </ThemedText>
          <ThemedText style={styles.dateText}>Sun, 4 Jun 📅</ThemedText>
          <ThemedView style={styles.streakBadge}>
            <ThemedText style={styles.streakText}>🔥 5</ThemedText>
          </ThemedView>
        </ThemedView>

      {/* ปฏิทิน */}
        <FlatList
          data={calendarData}
          style={styles.card}
          horizontal
          keyExtractor={(item) => item.date.toString()}
          renderItem={({ item }) => (
            <ThemedView
              style={[
                styles.calendarItem,
                item.isToday && styles.todayItem,
              ]}
            >
              <ThemedText style={styles.dayText}>{item.day}</ThemedText>
              <ThemedText style={styles.dateTextCalendar}>{item.date}</ThemedText>
              {item.mood && (
                <ThemedText style={styles.moodEmoji}>{item.mood}</ThemedText>
              )}
            </ThemedView>
          )}
        />

      {/* Today's Check-in */}
      <ThemedView style={styles.checkin}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Today's Check-in
        </ThemedText>
        {moodChartData? <ThemedText style={styles.placeholderText}>
          {moodChartData.length}
        </ThemedText> : <ThemedText style={styles.placeholderText}>
          Tap to select your mood today!
        </ThemedText>}
      </ThemedView>

      {/* Mood Chart */}
      <ThemedView style={styles.card}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Mood Chart
        </ThemedText>
        <FlatList
          data={moodChartData}
          horizontal
          keyExtractor={(item) => item.time}
          renderItem={({ item }) => (
            <ThemedView style={styles.moodBarContainer}>
              <ThemedText style={styles.moodEmoji}>{item.mood}</ThemedText>
              <MoodBar height={item.height} mood={item.mood} />
              <ThemedText style={styles.timeText}>{item.time}</ThemedText>
            </ThemedView>
          )}
        />
      </ThemedView>
      <ThemedText>
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 4
  },
  headerContainer: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    borderRadius: 15,
    marginHorizontal: 16,
    justifyContent:'space-between',
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  dateText: {
    fontSize: 16,
    color: '#444',
  },
  streakBadge: {
    backgroundColor: '#FFEBEE',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  streakText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF4500',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 16,
    gap: 4,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  calendarItem: {
    alignItems: 'center',
    padding: 10,
    marginRight: 10,
    borderRadius: 40,
    backgroundColor: '#F5F5F5',
    width: 60,
  },
  todayItem: {
    backgroundColor: '#87CEEB',
    borderWidth: 2,
    borderColor: '#20A4F3',
  },
  dayText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#444',
  },
  dateTextCalendar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  moodEmoji: {
    fontSize: 20,
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    borderRadius: 16,
    padding: 10 ,
    backgroundColor: '#####',
//คิดdesign ยังไม่ออก
  },
  moodBarContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  timeText: {
    fontSize: 12,
    color: '#666',
  },
  checkin:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  }

});