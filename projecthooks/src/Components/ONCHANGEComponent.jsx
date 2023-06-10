import React, { useState } from 'react';

const ONCHANGEComponent = () => {
    const [gender, setgendervalue] = useState('male');
    const genderHandler=(e)=>{
      return  console.log(e.target.value)

    }
    return (
        <div>
            <h1>OnCHange Event</h1>
            <form className='home'>
                <div>
                    <label htmlFor='male'> Male:</label>
                    <input id='male' onChange={(e)=>genderHandler(e)} type='radio' value="male" defaultChecked name="Gender" />
                </div>
                <div>
                    <label htmlFor='female'> Female:</label>
                    <input id='female' onChange={genderHandler()} type='radio' value="female" defaultChecked name="Gender" />
                </div>
            </form>
        </div>
    )
}

export default ONCHANGEComponent
