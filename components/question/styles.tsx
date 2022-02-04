import {StyleSheet} from 'react-native';
import ComponentConstant from '../constant';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    borderColor: ComponentConstant.Colors.SHADE,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
    paddingBottom: 2,
    position: 'relative',
  },
  mask: {
    position: 'absolute',
    backgroundColor: ComponentConstant.Colors.PRIMARY,
    top: -1,
    left: -1,
    right: -1,
    bottom: 0,
  },
  missingContainer: {
    borderStyle: 'solid',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: ComponentConstant.Colors.LIGHT,
    paddingHorizontal: 4,
  }
});

export default styles;
