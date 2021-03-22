import React, { useState } from "react";
import './App.css'

const Hotel = ({data}) => {
    const [email, setEmail] = useState(false);
    const [postData, setPostData] = useState({
        hotelName: '',
        email: ''
    });
    
    const handleShowMore = (event) => {
        const elem = event.target.parentNode
        const display = elem.querySelector('.display')
        const hide = elem.querySelector('.hide')

        if (display) {
            display.className = 'hide'
            event.target.textContent = 'Show more'
            
        } else {
            hide.className = 'display'
            event.target.textContent = 'Show less'
        }
        
    } 

    const handleRequest = (event) => {
        const elem = event.target.parentNode
        const display = elem.querySelector('.display-form')
        const hide = elem.querySelector('.hide-form')

        if (display) {
            display.className = 'hide-form'
            event.target.textContent = 'Request more info'
            
        } else {
            hide.className = 'display-form'
            event.target.textContent = 'Hide form'
        }
    } 

    const handleEmail = (e) => {
        setEmail(e.target.value);
        const displayParent = e.target.parentNode.parentNode.parentNode.parentNode.parentNode
        const hotelName = displayParent.querySelector('.name')
        setPostData({
            hotelName: hotelName.innerText,
            email: e.target.value
        })
        console.log(postData)
      };

    const validateForm = (e) => {
        console.log(email)
        if (email) {
            for (let c of email) {
                if (c == '@') {
                    return true
                }
            }
        }
        
        return false
    }
    const handleSubmit = (e) => {
        //TODO
    }


    return (
        <div>
            {data.map((hotel, index) => {
                return (
                    <div>
                        <div
                            key={hotel.name + index}
                        >
                            <div className={'name'}>{hotel.name}</div>
                            <div>
                                <button onClick={(event) => handleShowMore(event)}>
                                    show more   
                                </button>
                                
                                <div className={'hide'}>
                                    <div>{hotel.id}</div>
                                    <div>{hotel.city}</div>
                                    <div>{hotel.starts}</div>
                                    <button onClick={(event) => handleRequest(event)}>
                                        Request more information 
                                    </button>
                                    <div className={'hide-form'} >
                                        <form>
                                            <input type="email" 
                                            onChange={handleEmail}></input>
                                            <input
                                                type="submit"
                                                value="submit"
                                                onSubmit={handleSubmit()}
                                                disabled={!validateForm()}
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Hotel
