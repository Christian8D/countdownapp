import React, { Component } from 'react';

 class clock extends Component{

    constructor (props){
        super(props)

        this.state ={
            timeReminding:{}
        }
    }
    render() {
 const data = this.state.timeReminding
       return(
           <div>
               <div>DAYS {data.days}</div>
               <div>HRS {data.hours}</div>
               <div>MINS {data.minutes}</div>
               <div>SECS {data.seconds}</div>
           </div>
       )
    }
}
export default clock;