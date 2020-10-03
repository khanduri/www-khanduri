import React from 'react';


export default function ContentLayout(props) {
  return (
    <div id="top" className="page-container">
      
      <div className="content-container">
        {props.children}
      </div>

    </div>
  );
}