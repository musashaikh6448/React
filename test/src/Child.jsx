// import React from 'react'

const child = (props) => {
  return (
    <div>
      <h1>
        {props.message}
      </h1>
      <h1>{props.children}</h1>
    </div>
  );
};

export default child;
