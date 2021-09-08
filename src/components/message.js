import React from 'react';

export const Text = ({network, text, author}) => {
    return(
        <>
            <p className="message">{network}</p>
            <div >{text}  {author}</div>
        </>
    )
}