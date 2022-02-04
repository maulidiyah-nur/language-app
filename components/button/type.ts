import {TouchableHighlightProps} from 'react-native';

interface IButtonProps extends TouchableHighlightProps {
  shape?: 'circle' | 'rectangle';
  size?: 'small' | 'medium' | 'large';
  type?: 'primary' | 'secondary' | 'white' | 'valid' | 'error';
}

export default IButtonProps;
