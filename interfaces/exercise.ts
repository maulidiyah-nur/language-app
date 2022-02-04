import IWord from './word';

interface IExercise {
  id: number;
  question: Array<IWord>;
  missingWordIndex: number;
  options: Array<IWord>;
}

export default IExercise;
