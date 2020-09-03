import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditRequest extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeItem = this.onChangeItem.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            location: '',
            item: '',
            description: '',
            phone: '',
            date: new Date(),
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/request/'+this.props.match.params.id)
        .then(response => {
            this.setState({
            name: response.data.name,
            description: response.data.description,
            item: response.data.item,
            location: response.data.location,
            phone: response.data.phone,
            date: new Date(response.data.date)
            })   
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeItem(e) {
        this.setState({
            item: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }
    onChangePhone(date) {
        this.setState({
            phone: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const request = {
            name: this.state.name,
            description: this.state.description,
            item: this.state.item,
            phone: this.state.phone,
            location: this.state.location,
            date: this.state.date
        }

        axios.post('http://localhost:5000/request/update/' + this.props.match.params.id, request)
        .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
        <div>
        <h3>Edit Request</h3>
        <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
                <label>Name: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    />
            </div>
            <div className="form-group"> 
                <label>Phone Number: </label>
                <input  type="number"
                    required
                    className="form-control"
                    value={this.state.phone}
                    onChange={this.onChangePhone}
                    />
            </div>
            <div className="form-group"> 
                <label>Item: </label>
                <input  type="number"
                    required
                    className="form-control"
                    value={this.state.item}
                    onChange={this.onChangeItem}
                    />
            </div>
            <div className="form-group"> 
                <label>Description: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
            </div>
            <div className="form-group">
                <label>Pickup Location: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.location}
                    onChange={this.onChangeLocation}
                    />
            </div>
            <div className="form-group">
                <label>Date: </label>
                <div>
                    <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                    />
                </div>
            </div>

            <div className="form-group">
            <input type="submit" value="Edit Request" className="btn btn-primary" />
            </div>
        </form>
        </div>
        )
    }
}