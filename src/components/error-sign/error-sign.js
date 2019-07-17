import React from 'react';
import './error-sign.css'

class ErrorSign extends React.Component {
    render() {
        return(
        <div className='errorBlock'>
            <img src='https://cdn6.aptoide.com/imgs/5/0/8/508a67a9cf034ee87ebb5b7f48fbe06f_icon.png?w=256'
            alt='Dart Vader'></img>
            <h1>BOOM!</h1>
            <p>Dart Vader destroyed our app ! <br></br>
            But we already sent droids to fix it.<br></br>
            May the force be with them ! </p>
        </div>
        )
    }
}

export default ErrorSign;
