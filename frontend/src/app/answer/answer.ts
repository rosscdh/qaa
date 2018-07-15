export class Answer {
    id: number;

    user: string;
    dateof: string;
    down_votes: number;
    up_votes: number;
    polarity: number;
    subjectivity: number;

    constructor(json: any) {
        this.id = json.id

        this.user = json.user
        this.dateof = json.dateof
        this.down_votes = json.down_votes
        this.up_votes = json.up_votes
        this.polarity = json.polarity
        this.subjectivity = json.subjectivity
    }
}
