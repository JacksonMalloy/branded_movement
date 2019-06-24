import React, { Component } from 'react';
import { ourServices, detailService } from './data';



const ServiceContext = React.createContext();
//Provider

//Consumer

class ServiceProvider extends Component {

    state = {
        services: [],
        detailService: detailService
    }

    componentDidMount() {
        this.setService();
    }

    setService = () => {
        let tempServices = [];
        ourServices.forEach(item => {
            const singleItem = { ...item };
            tempServices = [ ...tempServices, singleItem ];

        })
        this.setState(() => {
            return { services: tempServices };
        })
    }

    getItem = (id) => {
        const service = this.state.services.find(item => item.id === id)
        return service;
    }

    handleDetail = (id) => {
        const service = this.getItem(id);
        this.setState(() => {
            return {detailService: service}
        })
    };

    render() {
        return (
            <ServiceContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail
            }}>
                { this.props.children }
            </ServiceContext.Provider>
        )
    }
}

const ServiceConsumer = ServiceContext.Consumer;

export { ServiceProvider, ServiceConsumer };
    
