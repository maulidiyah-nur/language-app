import {TextProps} from 'react-native';

interface ITextProps extends TextProps {
  color?: string;
  strong?: boolean;
  underline?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default ITextProps;
