import {StyleSheet} from 'react-native';
import ComponentConstant from './components/constant';

const styles = StyleSheet.create({
  container: {
    backgroundColor: ComponentConstant.Colors.PRIMARY,
    flex: 1,
    position: 'relative',
  },
  mainWrapper: {
    padding: ComponentConstant.Spacing.LARGE,
    flex: 1,
    alignItems: 'center',
  },
  questionWrapper: {
    flexDirection: 'row',
    marginVertical: ComponentConstant.Spacing.MEDIUM,
    alignItems: 'center',
  },
  optionWrapper: {
    marginVertical: ComponentConstant.Spacing.MEDIUM,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: ComponentConstant.Spacing.LARGE,
    borderTopRightRadius: ComponentConstant.Spacing.LARGE,
    padding: ComponentConstant.Spacing.LARGE,
  },
  buttonWrapperValid: {
    backgroundColor: ComponentConstant.Colors.VALID,
  },
  buttonWrapperError: {
    backgroundColor: ComponentConstant.Colors.ERROR,
  },
  resultContainer: {
    marginBottom: ComponentConstant.Spacing.SMALL,
  },
});

export default styles;
