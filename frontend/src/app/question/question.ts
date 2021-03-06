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

    public has_answer() {
        return (this.answer) ? this.answer.official_answer !== null : false;
    }

    public num_answers() {
        if (!this.answer || !this.answer.answers) {
            return 0
        }
        return this.answer.answers.length;
    }
}
