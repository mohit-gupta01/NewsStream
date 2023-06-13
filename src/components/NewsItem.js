import React from 'react'

function NewsItem(props) {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card">
        <div style={{ display: 'flex', position: 'absolute', right: '0' }}>
          <span className="badge rounded-pill bg-danger">{source}<span className="visually-hidden">unread messages</span></span></div>
        <img src={imageUrl ? imageUrl : "https://img.etimg.com/thumb/msid-97227239,width-1070,height-580,imgsize-31504,overlay-economictimes/photo.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
