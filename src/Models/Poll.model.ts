interface Answers{
    text:string,
    votes:number
}

export default interface PollModel {
    _id?:string,
    title:string,
    question:string,
    answers:Answers[],
}