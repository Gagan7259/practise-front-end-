import React from 'react'
const DomElemts = () => {
    return (
        <>
            <h1>Dom Elemenets</h1>
            <form className='home'>
                <div>
                <label htmlFor='male'> Male:</label>
                     <input id='male' type='radio' defaultChecked name="Gender" />
                </div>
                <div>
                <label htmlFor='female'> Female:</label>
                      <input id='female' type='radio' defaultChecked name="Gender" />
                </div>
            </form>
        </>
    )
}

export default DomElemts

