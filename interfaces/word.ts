import ITranslation from './translation';

interface IWord {
  key: string;
  translations: Array<ITranslation>;
}

export default IWord;
