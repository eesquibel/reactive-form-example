import { Answer } from './answer.model';

export class QuestionModel {
  public Id: number;
  public Text: string;
  public Answers: Answer[];
}
