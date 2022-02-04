import {StyleSheet} from 'react-native';
import ComponentConstant from './components/constant';

const styles = StyleSheet.create({
  container: {
    backgroundColor: ComponentConstant.Colors.PRIMARY,
    flex: 1,
  },
  mainWrapper: {
    padding: ComponentConstant.Spacing.LARGE,
    flex: 1,
    alignItems: 'center',
  },
  questionWrapper: {
    flexDirection: 'row',
    marginVertical: ComponentConstant.Spacing.MEDIUM,
  },
  optionWrapper: {
    marginVertical: ComponentConstant.Spacing.MEDIUM,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonWrapper: {
    padding: ComponentConstant.Spacing.LARGE,
  },
});

export default styles;
