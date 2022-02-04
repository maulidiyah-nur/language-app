import React from 'react';
import {TouchableOpacity} from 'react-native';

import IButtonProps from './type';
import styles from './styles';

const ButtonComponent = (props: IButtonProps) => {
	const {children, shape, size, type, style} = props;
	return (
		<TouchableOpacity
			{...props}
			style={{
				...style,
				...styles.container,
				...styles[shape ?? 'rectangle'],
				...styles[size ?? 'medium'],
				...styles[type ?? 'primary'],
			}}
			activeOpacity={0.8}>
			{children}
		</TouchableOpacity>
	);
};

export default ButtonComponent;
