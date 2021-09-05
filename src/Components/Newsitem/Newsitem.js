import React, { Component } from "react";
import './style.scss'

export class Newsitem extends Component {
   
  render() {
    return (
      <div className="news-card">
        <div className="card" style={{width:"19rem"}}>
          <img className="card-img-top" src={this.props.imgsrc} alt="" />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">
              {this.props.description}
            </p>
            <a href={this.props.url} target="_blank" rel="noreferrer" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
