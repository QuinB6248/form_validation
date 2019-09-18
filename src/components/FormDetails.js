import React from 'react'
import '../index.css'

export default function SignUpForm(props) {
  const { onChange, onSubmit, onFocusOut, values} = props
  
  return (
    <div >
      <form onSubmit={onSubmit}>
        <h1>YOUR INFORMATION</h1>
        
        <div className='field' >
          
          <div className='inputfield box_klein' >
            <label>Voorletter(s):</label>
            <input className='input_klein' type='text' name={'voorletters'} onChange={onChange} value={values.voorletters} required/>
          </div>
          
          <div className='inputfield box_klein'>
            <label >Tussenvoegsel:</label>
            <input className='input_klein' type='text' name={'tussenvoegsel'} onChange={onChange} value={values.tussenvoegsel} />
          </div>
          
          <div className='inputfield box_middel'>
            <label >Achternaam:</label>
            <input className='' type='text' name={'achternaam'} onChange={onChange} value={values.achternaam} required/>
          </div>

          <div className='inputfield box_klein' >
            <label>Postcode:</label>
            <input  className='input_klein' pattern='[1-9][0-9]{3}\s?[a-zA-Z]{2}' name={'postcode'} onBlur={onFocusOut} onChange={onChange} value={values.postcode} required/>
          </div>
          
          <div className='inputfield box_klein'>
            <label >Huisnummer:</label>
            <input className='input_klein' type='number' name={'huisnummer'} onChange={onChange} value={values.huisnummer} required/>
          </div>
          
          <div className='inputfield box_middel'>
            <label >Straatnaam:</label>
            <input className='' type='text' disabled='disabled' name={'straatnaam'} onChange={onChange} value={values.straatnaam} />
          </div>
          
          <div className='inputfield box_middel'>
            <label >Stad:</label>
            <input className='' type='text' name={'stad'} disabled='disabled' onChange={onChange} value={values.stad} />
          </div>
        
          <div className='inputfield box_groot'>
            <label >Email:</label>
            <input className='' type='email' name={'email'} onChange={onChange} value={values.email} required/>
          </div>
          
        </div> 
           
        <div className='buttonfield '>
          <button type='submit'>SUBMIT</button> 
        </div>

      </form>
    </div>
  )
}