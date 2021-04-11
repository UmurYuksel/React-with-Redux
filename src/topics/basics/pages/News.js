import React from 'react';



const News = (props) => {
    return (
        <div>
            <h4>
                {props.item.title}
            </h4>
            {props.item.feed}
        </div>
    )
}

export default News;