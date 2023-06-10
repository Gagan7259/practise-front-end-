import React from 'react';

const contact = (props) => {
    console.log('Contact component', props.data)
    const title = props.data;
    return (
        <div>
            <h1>Sagan</h1>
            <br />
            {title}
        </div>
    )
}

export default contact
