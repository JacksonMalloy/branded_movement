import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ServiceConsumer } from '../Context';

export default class Service extends Component {
    render() {
        const { id, title, company, info } = this.props.service;
        return (
            <div>
                <ServiceConsumer>
                    {(value) => ((
                        <div onClick={() => value.handleDetail(id)}>
                            <Link to="/services">
                                <button>Learn More</button>
                            </Link>
                            {title}
                            {company}
                            {info}
                        </div>
                    ))}
                </ServiceConsumer>
            </div>
        );
    }
}

