import React from 'react';
import { connect } from 'react-redux';
import { downloadAsync, selectStatus } from '../app/locationSlice';
import STATUS from '../app/status';

import Location from './Location/Location';
import Loading from './Generic/Loading';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.downloadAsync();
    }

    render() {
        // Check Status of Location Download
        if(this.props.status == STATUS.READY) {
            return <Location />
        } else if(this.props.status == STATUS.IDLE || STATUS.LOADING) {
            return <Loading />
        }
    }
}


const mapStateToProps = state => {
    return {
        activeFilter: state.Test
    };
}

export default connect(state => ({ status: selectStatus(state) }), {downloadAsync} )(App);