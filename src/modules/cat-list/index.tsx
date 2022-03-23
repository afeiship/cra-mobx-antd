import React from 'react';
import { Link } from 'react-router-dom';

const CatList = (props) => (
  <React.Fragment>
    <h1>Cat2 list</h1>
    <input type="text" />
    <ul className="list-group">
      {Array.isArray(props.cats) &&
        props.cats.map((cat, i) => (
          <Link key={`${cat}_${i}`} to={`/cat/${cat.slug}`}>
            <li className="list-group-item">{cat.name}</li>
          </Link>
        ))}
    </ul>
  </React.Fragment>
);

export default CatList;
