import Poll from "../../Models/Poll.model";
import axios from 'axios';
import { API_URL } from "../../Constants";

export default async (id:string) => {
    const res = await axios.get(`${API_URL}get-poll/${id}`)
    const data : Poll = res.data
    return data
}