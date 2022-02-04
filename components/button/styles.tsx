import {StyleSheet} from 'react-native';
import ComponentConstant from '../constant';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    shadowColor: ComponentConstant.Colors.DARK,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
  },
  /* shape */
  rectangle: {
    borderRadius: ComponentConstant.Spacing.SMALL / 2,
  },
  circle: {
    borderRadius: ComponentConstant.Spacing.LARGE,
  },
  /* size */
  small: {
    paddingHorizontal: ComponentConstant.Spacing.SMALL,
    paddingVertical: ComponentConstant.Spacing.SMALL / 2,
  },
  medium: {
    paddingHorizontal: ComponentConstant.Spacing.MEDIUM,
    paddingVertical: ComponentConstant.Spacing.MEDIUM / 2,
  },
  large: {
    paddingHorizontal: ComponentConstant.Spacing.LARGE,
    paddingVertical: ComponentConstant.Spacing.LARGE / 2,
  },
  /* type */
  primary: {
    backgroundColor: ComponentConstant.Colors.PRIMARY,
    color: ComponentConstant.Colors.LIGHT,
  },
  secondary: {
    backgroundColor: ComponentConstant.Colors.SECONDARY,
    color: ComponentConstant.Colors.LIGHT,
  },
  white: {
    backgroundColor: ComponentConstant.Colors.LIGHT,
    color: ComponentConstant.Colors.PRIMARY,
  },
  valid: {
    backgroundColor: ComponentConstant.Colors.VALID,
    color: ComponentConstant.Colors.LIGHT,
  },
  valid_inverse: {
    backgroundColor: ComponentConstant.Colors.LIGHT,
    color: ComponentConstant.Colors.VALID,
  },
  error: {
    backgroundColor: ComponentConstant.Colors.ERROR,
    color: ComponentConstant.Colors.LIGHT,
  },
  error_inverse: {
    backgroundColor: ComponentConstant.Colors.LIGHT,
    color: ComponentConstant.Colors.ERROR,
  },
});

export default styles;
