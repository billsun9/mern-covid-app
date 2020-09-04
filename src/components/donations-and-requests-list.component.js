import React, { Component } from 'react'
import MapContainer from './map-container.component';

export default class DonationsAndRequestsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            donations: [],
            requests: []
        };
    }
    componentDidMount() {
        axios.get('http://localhost:5000/donate/')
        .then(res => {
            this.setState({
                donations: res.data
            })
        })
        .catch(err => console.log(err));
        axios.get('http://localhost:5000/request/')
        .then(res => {
            this.setState({
                requests: res.data
            })
        })
        .catch(err => console.log(err));
    }
    render() {
        return (
            <MapContainer donations={this.state.donations} requests={this.state.requests}/>
        )
    }
}