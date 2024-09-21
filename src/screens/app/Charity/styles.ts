import {StyleSheet} from 'react-native';
import {height, width} from '~utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: height(2),
    paddingHorizontal: width(2),
  },

  backIcon: {
    width: width(6),
    height: width(7),
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: width(2),
  },
  title: {
    marginLeft: width(10),
  },
  senderDetails: {
    borderRadius: width(2),
    padding: width(2),
    marginVertical: width(2),
  },
  detailBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: width(2),
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: width(4),
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: width(2),
    flex: 1,
    height: width(15),
    color: 'red',
    padding: width(2),
  },
  searchButton: {
    alignSelf: 'center',
    right: 6,
    position: 'absolute',
    flex: 0.2,
    backgroundColor: '#8AACD4',
    borderRadius: width(2),
    justifyContent: 'center',
    alignItems: 'center',
    padding: width(2),
  },
  charityDetailsContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: width(2),
    padding: width(4),
    marginBottom: width(4),
  },
  charityHeader: {
    marginBottom: width(2),
  },
  charityDetails: {
    // Individual charity rows styling
  },
  charityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: width(2),
  },
  confirmButton: {
    position: 'absolute',
    bottom: 15,
    backgroundColor: '#0C56DB',
    padding: width(4),
    borderRadius: width(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    marginBottom: 30,
    borderColor: '#033525',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 5,
  },
  icon: {
    width: 40,
    height: 40,
  },
  tag: {
    fontSize: 12,
    color: '#A181F9', // Light purple
    backgroundColor: '#f0f0ff', // Slight purple background
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  details: {
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    color: '#033525',
  },
  value: {
    fontSize: 14,
    color: '#033525',
  },
  currency: {
    color: '#1abc9c', // Light green for currency
  },
  divider: {
    color: '#e0e0e0',
    marginVertical: 10,
  },
  progressBar: {
    height: 7,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 10,
  },
  progress: {
    width: '70%', // Progress percentage
    height: '100%',

    backgroundColor: '#A181F9', // Purple color
    borderRadius: 5,
  },
});
export default styles;
