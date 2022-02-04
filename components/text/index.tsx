import React from 'react';
import {Text} from 'react-native';
import ComponentConstant from '../constant';

import styles from './styles';
import ITextProps from './type';

const TextComponent = (props: ITextProps) => {
  const {children, color, strong, size, style, underline} = props;
  return (
    <Text
      {...props}
      style={{
        ...style,
        color,
        fontSize: ComponentConstant.FontSize[(size ?? 'medium').toUpperCase()],
        ...(underline ? styles.underline : {}),
        ...(strong ? styles.strong : {}),
      }}>
      {children}
    </Text>
  );
};

export default TextComponent;
