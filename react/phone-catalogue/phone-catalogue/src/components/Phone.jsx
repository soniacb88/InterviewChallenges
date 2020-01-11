import React, { Component } from 'react'
import PhoneList from './PhoneList'
export default class Phone extends Component {
    constructor(props) {
        super(props)
        this.state = { phones: [] }
    }
    componentWillMount() {
        fetch('http://localhost:3000/phones')
            .then((response) => {
                return response.json()
            })
            .then((phones) => {
                this.setState({ phones: phones })
            })
    }
    render() {
         if (this.state.phones.length > 0) {
            return (
              <div className="container-fluid">
                <PhoneList listado={this.state.phones} />
              </div>
            )
          } else {
            return <p className="text-center">Loading phones...</p>
          }
        }   
    }
