/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import Button from './components/button';
import Text from './components/text';
import ComponentConstant from './components/constant';

import styles from './styles';
import IExercise from './interfaces/exercise';
import Dummy from './data/exercise';

const App = () => {
  const [exerciseIndex, setExerciseIndex] = useState<number>(0);
  const exercise: IExercise = Dummy[exerciseIndex];
  const to = 'de';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.mainWrapper}>
          <Text color={ComponentConstant.Colors.SECONDARY}>
            Fill in the missing word
          </Text>
          <View style={styles.questionWrapper}>
            {exercise.question.map((q, i) => {
              return (
                <Text
                  color={ComponentConstant.Colors.LIGHT}
                  style={{marginHorizontal: 2}}
                  size="large"
                  strong={exercise.missingWordIndex === i}
                  underline={exercise.missingWordIndex === i}>
                  {q.key}
                </Text>
              );
            })}
          </View>
          <View style={styles.optionWrapper}>
            {exercise.options.map(o => {
              const trans = o.translations.find(x => x.languageCode === to);
              return (
                <Button
                  type="white"
                  size="small"
                  style={{
                    margin: ComponentConstant.Spacing.SMALL / 2,
                  }}>
                  <Text color={ComponentConstant.Colors.PRIMARY} strong>
                    {trans?.value}
                  </Text>
                </Button>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Button
          type="secondary"
          shape="circle"
          onPress={() => {
            const nextIndex = (exerciseIndex + 1) % Dummy.length;
            setExerciseIndex(nextIndex);
          }}>
          <Text color={ComponentConstant.Colors.LIGHT} strong>
            CONTINUE
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default App;
