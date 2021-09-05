import React, { Component } from 'react'
import Loder from '../assets/loader.gif'
import './loading.scss'
export class Loading extends Component {
    render() {
        return (
            <div className="loadingimg">
                <img src={Loder} alt="loding" />
                
            </div>
        )
    }
}

export default Loading
