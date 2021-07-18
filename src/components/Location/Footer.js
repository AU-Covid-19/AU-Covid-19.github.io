import { fromUnixTime, formatDistance, subDays } from 'date-fns';
import React from 'react';

import "./Location.scss";

export default function Footer(props) {
    const lastUpdated = props.updated;

    const formatted = formatDistance(fromUnixTime(lastUpdated), new Date(), { addSuffix: true })

    return (
        <div className="footer">
            <p>Updated {formatted}</p>
        </div>
    )
}