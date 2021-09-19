import React from 'react';
import Helmet from'react-helmet';
import "../styles/bootstrap.min.css";


export default function ContentLayout(props) {
  return (
    <div id="top" className="page-container">
      
      {/* <PageTitle title={props.title} /> */}

      <div className="content-container">
        {props.children}
      </div>

      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="Description" content="Homepage for Prashant Khanduri"></meta>
        <title>Prashant Khanduri</title>
  
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"/>

      </Helmet>
    </div>
  );
}