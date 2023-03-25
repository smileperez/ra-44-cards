import React from 'react';

function Cards( {img, title, content, href}) {
    
    const renderImg = img ? <img className='card-img' src={img} alt={img} /> : null;
    const renderTitle = title ? <h5 className='card-title'>{title}</h5> : null;
    const renderContent = content ? <p className='card-text'>{content}</p> : null;
    const renderHref = href ? <a className='card-btn' href={href}>Go somewhere</a> : null;

    return (
        <div className='card'>
            {renderImg}
            <div className='card-body'>
                {renderTitle}
                {renderContent}
                {renderHref}
            </div>
        </div>
    );
}

export default Cards; 