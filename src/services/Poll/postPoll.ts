import Poll from "../../Models/Poll.model";
import axios from 'axios';
import { API_URL } from "../../Constants";

export default async (poll:Poll) => {
    const res = await axios.post(`${API_URL}poll`, {
        title: poll.title,
        question: poll.question,
        answers: poll.answers,
    })
    return res.data.poll
}