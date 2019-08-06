import React from 'react';
import Helmet from'react-helmet';


export default function ContentLayout(props) {
  return (
    <div className="page-container">
      
      {/* <PageTitle title={props.title} /> */}

      <div className="content-container">
        {props.children}
      </div>

      <Helmet>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.js"></script>
      </Helmet>
    </div>
  );
}