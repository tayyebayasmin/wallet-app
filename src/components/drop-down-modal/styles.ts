import {StyleSheet} from 'react-native';
import {height, width} from '~utils';
import AppColors from '~utils/AppColors';

const styles = StyleSheet.create({
  switchDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.white,
    padding: width(2),
    borderRadius: width(1),
    justifyContent: 'space-between',
    marginRight: width(2),
  },
  line: {
    width: width(90),
    marginTop: width(1.5),
  },
  dropdownText: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: width(50),
    textAlign: 'center',
  },
  text: {
    paddingHorizontal: width(3),
    width: width(78),
  },
  modal: {
    width: width(90),
    backgroundColor: AppColors.white,
    paddingTop: width(4),
    borderRadius: width(2),
    alignItems: 'center',
    alignSelf: 'center',
    minHeight: height(20),
    marginTop: width(45),
    maxHeight: height(35),
  },
  modalRow: {
    justifyContent: 'center',
    paddingVertical: width(1.5),
    marginBottom: width(0.4),
  },
});
export default styles;
