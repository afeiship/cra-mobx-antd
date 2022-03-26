import React from 'react';
import { Link } from 'react-router-dom';

const CatList = (props) => (
  <React.Fragment>
    <h1 className={cx('text-red mx-1 hover:mx-2.5 p-[10px] transform')}>Cat123 list</h1>
    <p className="lc-1 wp-2">
      道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。
      故常无欲，以观其妙，常有欲，以观其徼。 此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。
    </p>
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
