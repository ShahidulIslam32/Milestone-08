import React from 'react';
import './BLog.css'

const Blog = ({title , author , decs}) => {

    return (
        <div className='container mt-5 admin'>
            <h1>Title : {title}</h1>
            <h3>Author : {author}</h3>
            <p>Read {decs}</p>
        </div>
    );
};

export default Blog;