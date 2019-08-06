import React from "react";
import BackgroundPolygonComponent from "../components/background_polygon";


const PRASHANT_ABOUT = [
  {
     "type": "text",
     "content": "Hi there! I'm Prashant Khanduri"
  },
  {
     "type": "text",
     "content": "I'm originally from India. Although most of my school days were spent in India (New Delhi), a few of them slipped into Nepal (Kathmandu), Canada (Waterloo) and United States (Los Angeles)"
  },
  {
     "type": "text",
     "content": "On a day to day basis, I tell computers what to do and they seem to obey me (for the most part). I end up getting paid for <a href='#experience'>some of it</a>, the other portion ends up on a <a href='https://github.com/khanduri/''>public domain</a>"
  },
  {
     "type": "text",
     "content": "I also <a href='http://khanduri.github.io/''>blog</a>, but I haven't really scoped out the topics I'd like to talk about. For now, I'm just using it to collect ideas that I find interesting. I hope someday a pattern will emerge"
  },
  {
     "type": "text",
     "content": "In case you're wondering, the above picture is me trying to slide down Mt Rainier (Paradise snowplay area) and not doing a great job at it. I like the picture though"
  },
  {
     "type": "text",
     "content": "You know a lot about me now! .. <a href='#contact' className='page-scroll'>Ok your turn</a>"
  }
]


function AboutComponentItem(props){
  var aboutItem = props.items;

  if (aboutItem.type == "text"){
    return (<div className="mx-4 my-2" dangerouslySetInnerHTML={{__html: aboutItem.content }}></div>)
  }

  if (aboutItem.type == "list"){
    var rows = [];

    aboutItem.content.map(function(listItem, i){
      rows.push(<li key={'about_list_item_'+i} ><div className="" dangerouslySetInnerHTML={{__html: listItem }}></div></li>);
    });

    return (
        <div>
          <div className="" dangerouslySetInnerHTML={{__html: aboutItem.title }}></div>
          <ul className="">
            {rows}
          </ul>
        </div>
    )
  }

  return (<div> SOMETHING WENT WRONG !</div>)
}


export default function AboutComponent(props) {
    // const about = props.items || [];
    const about = PRASHANT_ABOUT;

    return (
        <section className="content-section  highlight-secondary-9">
          <div className="py-3">
            <div className="container text-white">
              {(props.background_density !== undefined)? <BackgroundPolygonComponent density={props.background_density}/>: '' }
              <h2>About Me</h2>
              {about.map(function(aboutItem, i){
                return (<AboutComponentItem items={aboutItem} key={'about_item_' + i}/>)
              })}
            </div>
          </div>
        </section>
    )
}