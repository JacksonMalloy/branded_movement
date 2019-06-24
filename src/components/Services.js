import React, { Component } from 'react'
import { ServiceConsumer } from '../Context'



export default class Services extends Component {
    render() {
        return (
            <ServiceConsumer>
                { (value) => {
                    const { title, company, info } = value.detailService;
                    return (
                        <div>
                            <h1>{title}</h1>
                            <span>{company}</span>
                            <p>{info}</p>
                        </div>
                    )
                }}
            </ServiceConsumer>
        )
    }
}
