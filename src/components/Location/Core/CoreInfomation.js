import React from 'react';
import Core from './Core';

export default function CoreInfomation(props) {
    const info = props.info;
    const Elements = info.map((info) => {
        return <Core key={info.name} title={info.name} info={info.data}/>
    })
    return (
        <div className="coreContainer">
            {Elements}
        </div>
    )
}