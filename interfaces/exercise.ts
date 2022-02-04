import IWord from './word';

interface IExercise {
  id: number;
  questions: Array<IWord>;
  missingWordIndex: number;
  options: Array<IWord>;
}

export default IExercise;
