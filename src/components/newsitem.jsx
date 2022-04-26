import React from "react";

export default function Newsitem(props) {
  let dt = props.date;
  return (
    <div className="news-card">
      <img src={props.imageurl ? props.imageurl : "https://media.istockphoto.com/photos/scissors-cutting-a-paper-with-unavailable-available-words-3d-picture-id1208842539?b=1&k=20&m=1208842539&s=170667a&w=0&h=RJAJdEJe8OHu5YtPegQijuR2lEDTtY4JfkUBPsuKQnI="} className="news-card-img" alt="..." />
      <div className="news-card-body">
        <h5 className="news-card-title">{props.title ? props.title.slice(0, 50) : ""}...</h5>
        <p className="news-card-text">
          {props.description ? props.description.slice(0, 90) : ""}...
        </p>
        <p className="card-text"><small className="text-muted"> {new Date(dt).toUTCString()} </small></p>
        <a href={props.url} rel="noreferrer" target="_blank" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}
