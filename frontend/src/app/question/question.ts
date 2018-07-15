import { Answer } from '../answer/answer';

export class Question {
    id: number;
    url: string;
    q: string;
    answers: Answer[] ;

    constructor(json: any) {
        console.log(json)
        this.id = json.id;
        this.url = json.url;
        this.q = json.q;
        this.answers = json.answers.map(function(row) {return new Answer(row)});
    }

    public num_answers() {
        console.log(this.answers)
        return this.answers.length;
    }
}
