import React from 'react';
import News from './News';

const NewsList = (props) => {


    const renderNewsTemplate = props.newsArray.map((item)=>{
        return (
                <News key={item.id} item={item} />
        )
    })


    return (
        <div>{renderNewsTemplate}</div>
    )
}


export default NewsList;