import React from 'react';
import './Article.css';

const Article = ({ imgURL, date, title }) => {
    return (
        <div className="gpt3__blog-container__article">
            <div className="gpt3__blog-container__article-img">
                <img src={imgURL} alt="blog" />
            </div>
            <div className="gpt3__blog-container__article-content">
                <p>{date}</p>
                <h3>{title}</h3>
                <p>Read Full Article</p>
            </div>
        </div>
        
    );
};

export default Article;