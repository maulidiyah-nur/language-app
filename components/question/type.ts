import IWord from '../../interfaces/word';

interface IQuestionProps {
  data: IWord;
  isMissingWord?: boolean;
  languageCode: string;
  answer?: IWord;
  isValid?: boolean;
  isError?: boolean;
}

export default IQuestionProps;
