import React, { useState } from 'react';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import PollModel from "../../Models/Poll.model";
import postPoll from '../../services/Poll/postPoll';
import { PollForm } from '../../Components/PollForm/PollForm';
import Image from "../../assets/images/poll_creator.svg";
export interface Props {
}

interface Question {
    text: string
}
const CreatePoll: React.FC<Props> = () => {
    const [submitLoader, setSubmitLoader] = useState<boolean>(false);
    const history = useHistory();

    const sendPoll = async (values: any) => {
        setSubmitLoader(true);
        const data: PollModel = {
            title: values.title,
            question: values.question,
            answers: values.questions.map(({ text }: Question) => text),
        }
        try {
            const poll = await postPoll(data);
            setSubmitLoader(false);
            history.push(`/poll/${poll._id}`)
        } catch (err) {
            setSubmitLoader(false);
        };
    }


    const onFinish = (values: any) => {
        if (!values.questions || values.questions.length < 2) {
            notification.error({ message: "Please add at least 2 options" })
            return;
        }
        sendPoll(values);
    };


    return (
        <div className="create-poll">
            <PollForm onFinish={onFinish} loader={submitLoader} />
            <div className="create-poll__image">
            <img src={Image} alt="creator" />
            </div>
        </div>
    )
}
export default CreatePoll;
