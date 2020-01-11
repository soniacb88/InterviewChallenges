import React, { Component } from 'react'

export default class PhoneList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <ul className="media-list">
                    {
                        this.props.listado.map((phones) => {
                            return <React.Fragment key={phones.id}
                                name={phones.name} />
                        })
                    }
                </ul>
            </div>
        )
    }
}
