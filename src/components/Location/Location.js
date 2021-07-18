import React from 'react';
import { connect } from 'react-redux';
import { selectData } from '../../app/locationSlice';

import LocationTitle from './LocationTitle';
import CoreInfomation from './Core/CoreInfomation';
import Locations from '../../logic/LocationsHandler';

import VICTORIA from '../../logic/Locations/Victoria';
import Footer from './Footer';

class Location extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Data = this.props.data;
        const Today = Locations.getCurrentDay(Data);
        const Core = VICTORIA.CoreInfomation(Today);
        const Updated = Today.time;

        return (
            <div>
                <LocationTitle location={Data.info.name} />
                <CoreInfomation info={Core} />
                <Footer updated={Updated}/>
            </div>
        )
    }
}

export default connect(state => ({ data: selectData(state) }), null)(Location);