import React, { useEffect, useState } from 'react';
import ResultCard from '../ResultCard/ResultCard';

const Results = () => {
    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        fetch('http://hn.algolia.com/api/v1/search?query=...&hitsPerPage=30')
            .then(res => res.json())
            .then(data => setAllNews(data.hits))
    }, [])
    // console.log(allNews);

    return (
        <div>
            <h1>results</h1>
            {
                allNews.map(news => <ResultCard
                    news={news}
                ></ResultCard>)
            }
        </div>
    );
};

export default Results;