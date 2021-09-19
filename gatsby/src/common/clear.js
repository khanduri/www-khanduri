import React from 'react';


export default function ContentLayout(props) {
  return (
    <div id={props.page_id || "ID_MISSING"} className="page-container">      
      <div className="content-container">
        {props.children}
      </div>

    </div>
  );
}