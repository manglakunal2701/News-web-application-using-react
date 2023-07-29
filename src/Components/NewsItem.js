import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,publishedAt,author} = this.props;
    return (
      <div className="my-3">
        <div className="card"  style={{ maxWidth: 290.333333 }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(publishedAt).toGMTString()}</small></p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark"> Read More</a>
          </div>
        </div>
      </div>
    );
  }
}
