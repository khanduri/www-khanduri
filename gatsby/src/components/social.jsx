import React from "react";

export default function SocialComponent(props){
  const contact = props.contact;

  return (
    <div className="">
      {contact.github ? <a href={"https://github.com/"+contact.github} className="m-1 btn btn-sm btn-dark"><i className="fab fa-github fa-2x"></i></a>: null }
      {contact.linkedin ? <a href={"https://www.linkedin.com/in/"+contact.linkedin} className="m-1 btn btn-sm btn-dark"><i className="fab fa-linkedin fa-2x"></i></a>: null }
      {contact.facebook ? <a href={"https://www.facebook.com/"+contact.facebook} className="m-1 btn btn-sm btn-dark"><i className="fab fa-facebook fa-2x"></i></a>: null }
      {contact.twitter ? <a href={"https://twitter.com/"+contact.twitter} className="m-1 btn btn-sm btn-dark"><i className="fab fa-twitter fa-2x"></i></a>: null }
    </div>
  )
}
