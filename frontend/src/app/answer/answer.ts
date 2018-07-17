export class Answer {
    id: number;
    official_answer: string;
    answers: SubAnswer[] ;

    constructor(data: any) {
        this.id = data.id
        this.official_answer = data.a
        this.answers = data.answers.map(function(row) {return new SubAnswer(row)});
    }

}

export class SubAnswer {
    id: number;
    answer: string;
    user: string;
    dateof: string;
    down_votes: number;
    up_votes: number;
    polarity: number;
    subjectivity: number;

    constructor(data: any) {
        this.id = data.id
        this.answer = data.answer
        this.user = data.user
        this.dateof = data.dateof
        this.down_votes = data.down_votes
        this.up_votes = data.up_votes
        this.polarity = data.polarity
        this.subjectivity = data.subjectivity
    }
}
