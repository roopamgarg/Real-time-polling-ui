import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import getPoll from '../../services/Poll/getPoll';
import getPollEvent from '../../socket/getPoll';
import PollModel from '../../Models/Poll.model';
import PollContent from '../../Components/PollContent/PollContent';
import io from "../../socket";
import Image from "../../assets/images/real_time.svg";
import { message, Empty } from 'antd';
const Poll = () => {
    const [poll, setPoll] = useState<PollModel | undefined | null>()
    const { id } = useParams();
    //const route = useRouteMatch();
    // let count = 0;
    useEffect(() => {
        console.log(window.location.href);
        getPoll(id)
            .then(data => {
                setPoll(data);
                getPollEvent(io, id);
                io.on('refresh-data', (data: string) => {
                    const pollData = JSON.parse(data);

                    setPoll(pollData);
                })
            })
            .catch(err => {
                setPoll(null);
            })
        return () => {
            io.disconnect()
        }
    }, [])
    const copyToClipboard = () => {
        const text = window.location.href;
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
        message.success("Link Copied Successfully!")
    }
    if (poll === undefined) {
        return <p>"...Loading"</p>
    }
    if(poll === null){
        return (
        <div className="poll-page">
            <Empty/>
        </div>
        )
    }
    return (
        <div className="poll-page">
            <PollContent poll={poll} io={io} copyToClipboard={copyToClipboard} />
            <div className="poll-page__image">
                <img  src={Image} alt="real-time" />
            </div>
        </div>
    )
}

export default Poll;