import { Answer } from '../answer/answer';

export class Question {
    id: number;
    url: string;
    q: string;
    answers: Answer[] ;

    constructor(data: any) {
        this.id = data.id;
        this.url = data.url;
        this.q = data.q;

        this.answers = data.answers.map(function(row) {return new Answer(row)});
    }

    public num_answers() {
        if (this.answers.length <= 0) {
            return 0
        }
        return this.answers[0].answers.length;
    }
}
