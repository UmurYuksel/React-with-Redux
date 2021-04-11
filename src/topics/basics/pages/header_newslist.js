import React, { Component } from 'react';
import JSON from "../db.json";
import Header from './header';
import NewsList from './NewsList';


class HeaderNewslist extends Component {

    state={
        news:JSON,
        filtered:[]
    }

    getFilteredNews = (event) => {
        let keyword = event.target.value;
        let filtered = this.state.news.filter((item)=> {
            return item.title.indexOf(keyword) >-1
        })

        this.setState({
            filtered
        })
    }


    

    render() {
        let filteredArr = this.state.filtered;
        let unfilteredArr = this.state.news;
        return (
            <div>
                <Header keywords={this.getFilteredNews} />
                <NewsList newsArray={filteredArr.length===0? unfilteredArr:filteredArr} />
            </div>
        );
    }
}

export default HeaderNewslist;