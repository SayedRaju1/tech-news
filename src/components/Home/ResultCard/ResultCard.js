import React from 'react';

const ResultCard = (props) => {
    const { title, url, points, author, num_comments, created_at } = props.news;
    return (
        <div className="p-1">
            <h6>{title}</h6>
            <p>{url}</p>
        </div>
    );
};

export default ResultCard;