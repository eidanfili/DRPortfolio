import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';


export default class PortfolioContainer extends Component{
    constructor() {
        super();

        this.state = {
            pageTitle: "Portfolio content",
            isLoading: false,
            data: [
                {title: "Quip", category: "fdsa", slug: "Quip"}, 
                {title: "Eventbrite", category: "asdfasdf", slug: "Eventbrite"}, 
                {title: "Ministry Safe", category: "asdfasdf", slug: "Ministry-safe"},
                {title: "Eventbrite", category: "sdfa1", slug: "eventbrite"},
                {title: "some company", category: "sdfa1", slug: "somecompany"} 
            ]
        };
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter){
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    }

    portfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} slug={item.slug}/>;
        })
    }

    render(){
        if (this.state.isLoading) {
            return <div>Loading Content</div>
        }
    return(
        <div>
           <h2>{this.state.pageTitle}</h2>

            <button onClick={() => this.handleFilter("fdsa")}>
                fdsa
            </button>
            <button onClick={() => this.handleFilter("asdfasdf")}>
                asdfasdf
            </button>
            <button onClick={() => this.handleFilter("sdfa1")}>
                sdfa1
            </button>

           {this.portfolioItems()}
        </div>
        )
    }
}

// const style = {
//     width: '500px',
//     alignItems: 'center',
//     textAlign: 'center',
// };