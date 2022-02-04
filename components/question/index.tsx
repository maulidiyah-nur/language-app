import React, { useState } from 'react';
import Tooltip from 'react-native-walkthrough-tooltip';
import {TouchableOpacity, View} from 'react-native';
import Text from '../text';
import Button from '../button';

import styles from './styles';
import IQuestionProps from './type';
import ComponentConstant from '../constant';

const QuestionComponent = (props: IQuestionProps) => {
  const {data, isMissingWord, languageCode, answer, isValid, isError} = props;
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
  const trans = data.translations.find(x => x.languageCode === languageCode);

  if (isMissingWord && !answer) {
    return <View style={[styles.container, styles.missingContainer]}><Text color={ComponentConstant.Colors.PRIMARY}>{trans?.value}</Text></View>
  }
  if (isMissingWord && answer) {
    const aTrans = answer.translations.find(x => x.languageCode === languageCode);
    if (!isError && !isValid) {
      return <Button type='white' size='small'><Text strong color={ComponentConstant.Colors.PRIMARY}>{aTrans?.value}</Text></Button>
    } else if (isValid) {
      return <Button type='valid' size='small'><Text strong color={ComponentConstant.Colors.LIGHT}>{aTrans?.value}</Text></Button>
    } else if (isError) {
      return <Button type='error' size='small'><Text strong color={ComponentConstant.Colors.LIGHT}>{aTrans?.value}</Text></Button>
    }
  }
  return ( 
    <Tooltip
      isVisible={tooltipVisible}
      content={<Text>{data.key}</Text>}
      placement="top"
      onClose={() => setTooltipVisible(false)}
      backgroundColor="rgba(0,0,0,0)"
    >
      <TouchableOpacity style={styles.container} onPress={() => setTooltipVisible(true)}>
        <View style={styles.mask} />
        <Text color={ComponentConstant.Colors.LIGHT}>{trans?.value}</Text>
      </TouchableOpacity>
    </Tooltip>
  );
};

export default QuestionComponent;
