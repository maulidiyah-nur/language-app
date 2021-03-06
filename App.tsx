import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, LogBox} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import Button from './components/button';
import Text from './components/text';
import Question from './components/question';
import ComponentConstant from './components/constant';

import styles from './styles';
import IExercise from './interfaces/exercise';
import IWord from './interfaces/word';

LogBox.ignoreLogs(['EventEmitter.removeListener']);

const App = () => {
  const [exercises, setExercises] = useState<Array<IExercise>>([]);
  const [exerciseIndex, setExerciseIndex] = useState<number>(0);
  const [answerIndex, setAnswerIndex] = useState<number | undefined>();
  const [lockAnswer, setLockAnswer] = useState<boolean>(false);
  const exercise: IExercise | undefined = exercises[exerciseIndex];
  const answer: IWord | undefined =
    answerIndex !== undefined ? exercise?.options[answerIndex] : undefined;
  const isAnswerValid = answer?.key === exercise?.questions[exercise?.missingWordIndex]?.key;
  const to = 'de';

  const exerciseCollection = firestore().collection('exercise');

  useEffect(() => {
    exerciseCollection
      .get()
      .then((collectionSnapshot) => {
        const response: Array<IExercise> = [];
        collectionSnapshot.forEach((documentSnapshot) => {
          response.push(documentSnapshot.data() as IExercise);
        });
        setExercises(response);
      })
      .catch((err) => {
        console.log({err});
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.mainWrapper}>
          <Text color={ComponentConstant.Colors.SECONDARY}>Fill in the missing word</Text>
          <View style={styles.questionWrapper}>
            {exercise?.questions.map((q, i) => {
              return (
                <Text
                  key={i}
                  color={ComponentConstant.Colors.LIGHT}
                  style={{marginHorizontal: 2}}
                  size="large"
                  strong={exercise.missingWordIndex === i}
                  underline={exercise.missingWordIndex === i}
                >
                  {q.key}
                </Text>
              );
            })}
          </View>
          <View style={styles.questionWrapper}>
            {exercise?.questions.map((q, i) => {
              return (
                <Question
                  key={i}
                  data={q}
                  languageCode={to}
                  isMissingWord={exercise.missingWordIndex === i}
                  answer={answer}
                  isValid={lockAnswer && isAnswerValid}
                  isError={lockAnswer && !isAnswerValid}
                />
              );
            })}
          </View>
          <View style={styles.optionWrapper}>
            {exercise?.options.map((o, i) => {
              const trans = o.translations.find((x) => x.languageCode === to);
              return (
                <Button
                  key={i}
                  type={answerIndex === i ? 'secondary' : 'white'}
                  size="small"
                  style={{
                    margin: ComponentConstant.Spacing.SMALL / 2,
                  }}
                  onPress={() => {
                    if (answerIndex !== i) setAnswerIndex(i);
                  }}
                >
                  <Text
                    color={answerIndex === i ? 'transparent' : ComponentConstant.Colors.PRIMARY}
                    strong
                  >
                    {trans?.value}
                  </Text>
                </Button>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          styles.buttonWrapper,
          lockAnswer ? (isAnswerValid ? styles.buttonWrapperValid : styles.buttonWrapperError) : {},
        ]}
      >
        {lockAnswer ? (
          <View style={styles.resultContainer}>
            {isAnswerValid ? (
              <Text color={ComponentConstant.Colors.LIGHT} strong>
                Great Job!
              </Text>
            ) : (
              <>
                <Text color={ComponentConstant.Colors.LIGHT} strong>
                  Answer:{' '}
                  {
                    exercise?.questions[exercise?.missingWordIndex]?.translations.find(
                      (t) => t.languageCode === to,
                    )?.value
                  }
                </Text>
              </>
            )}
          </View>
        ) : (
          <></>
        )}
        {answerIndex === undefined || (answerIndex !== undefined && lockAnswer) ? (
          <Button
            type={lockAnswer ? 'white' : 'secondary'}
            shape="circle"
            onPress={() => {
              const nextIndex = (exerciseIndex + 1) % exercises.length;
              setExerciseIndex(nextIndex);
              setAnswerIndex(undefined);
              setLockAnswer(false);
            }}
          >
            <Text
              color={
                lockAnswer
                  ? isAnswerValid
                    ? ComponentConstant.Colors.VALID
                    : ComponentConstant.Colors.ERROR
                  : ComponentConstant.Colors.LIGHT
              }
              strong
            >
              CONTINUE
            </Text>
          </Button>
        ) : (
          <Button
            type="valid"
            shape="circle"
            onPress={() => {
              setLockAnswer(true);
            }}
          >
            <Text color={ComponentConstant.Colors.LIGHT} strong>
              CHECK ANSWER
            </Text>
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;
