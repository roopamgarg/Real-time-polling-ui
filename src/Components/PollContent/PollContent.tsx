import React, { useContext, useState } from 'react';
import PollModel from "../../Models/Poll.model";
import { Button, notification } from 'antd';
import {CopyOutlined} from "@ant-design/icons";
import addVote from '../../socket/addVote';

interface Props {
    poll: PollModel
    io: any
    copyToClipboard: ()=>void
}

const PollContent = ({ poll, io,copyToClipboard }: Props) => {
    const { question, title, answers, _id } = poll;
    const [option, setOption] = useState<number | undefined>()
    
    const renderOptions = () => {
        // console.log(answers)
        const totalVotes = answers.reduce((ans, { votes }) => {
            //console.log(votes)
            return ans + votes;
        }, 0)
        return answers.map(({ text, votes }, key) => {
            const votesPercentage = (votes / (totalVotes ? totalVotes : 1)) * 100;
            return (
                <label htmlFor={`${key}`} className="poll__options">
                    <div className="poll__options__content"><input id={`${key}`} name="option" onChange={() => setOption(key)} type="radio" /></div>
                    <div className={"poll__options__text poll__options__content"}>{text}</div>
                    <div className="poll__options__content">{votesPercentage.toPrecision(4)}%</div>
                    <div className="poll__options__votes" style={{width:`${votesPercentage}%`}}></div>
                </label>
            )
        })
    }

    const handleAddVote = () => {
        console.log(_id && option)
        if (_id !== undefined && option !== undefined) {
            addVote(io, _id, option)
        }else{
            notification.error({message:"Option Not Selected!"})
        }
    }

    return (
        <div className="poll">
            <h3>{title[0].toUpperCase() + title.slice(1)}</h3>
            <h2>Q) {question[0].toUpperCase() + question.slice(1)}</h2>
            {renderOptions()}
            <div className="poll__vote">
                <Button className="poll__btn--copy" onClick={copyToClipboard} type="primary"><CopyOutlined /></Button>

                <Button className="poll__btn" onClick={handleAddVote} type="primary">Vote</Button>
            </div>
        </div>
    )
}
export default PollContent;