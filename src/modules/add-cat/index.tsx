import React, { useState } from 'react';
import styled from 'styled-components';

export const convertToSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

const AddCateContainer = styled.div`
  border: 1px solid red;
`;

function generateCat() {
  const catPhotos = ['cat-1.jpg', 'cat-2.jpg', 'cat-3.jpg', 'cat-4.jpg'];
  const catRandomizerNum = Math.floor(Math.random() * (catPhotos.length + 1));
  return `/imgs/${catPhotos[catRandomizerNum]}`;
}

const AddCat = (props) => {
  const [catName, setCatName] = useState('');

  return (
    <AddCateContainer>
      <div className="form-group">
        <label>Cat name</label>
        <input
          placeholder="Mr. Frizzle"
          className="form-control"
          onChange={(e) => setCatName(e.target.value)}
        />
        <small className="form-text text-muted">Pick a good cat name.</small>
      </div>
      <button
        className="btn btn-primary"
        onClick={() =>
          props.onSubmit &&
          catName.length &&
          props.onSubmit({
            name: catName.trim(),
            picURL: generateCat(),
            slug: convertToSlug(catName.trim()),
          })
        }>
        Submit
      </button>
    </AddCateContainer>
  );
};

export default AddCat;
