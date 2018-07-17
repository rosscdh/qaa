import { Answer } from '../answer/answer';

export class Question {
    id: number;
    url: string;
    q: string;
    answer: Answer;

    constructor(data: any) {
        this.id = data.id;
        this.url = data.url;
        this.q = data.q;

        this.answer = (data.answer) ? new Answer(data.answer): null;
    }

    public num_answers() {
        if (!this.answer || !this.answer.answers || this.answer.answers.length <= 0) {
            return 0
        }
        return this.answer.answers.length;
    }
}
