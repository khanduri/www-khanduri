import React from "react";
import BackgroundPolygonComponent from "../reuse/background_polygon";


const PRASHANT_EXPERIENCE = [
  {
     "fa_class":"fa fa-spin fa-th-large",
     "title": "Diffy",
     "link": "https://github.com/opendiffy/diffy",
     "loc":"San Fransisco, CA / NCR, India",
     "dates":"2018 - current",
     "position":"Co-Founder / CTO",
     "body":[
        {
           "team_desc":"An open source tool that allows developers to catch bugs before they are pushed to production",
           "duties":[
              "Define the open core and hosted strategies for Diffy",
              "Architect the hosted solution with a focus on generating review insights",
              "Evangelize Diffy at conferences"
           ]
        }
     ]
  },
  {
     "fa_class":"fa fa-credit-card",
     "title":"Affirm",
     "link": "https://www.affirm.com/",
     "loc":"San Fransisco, CA",
     "dates":"2015 - 2018",
     "position":"Engineering Manager",
     "body":[
        {
           "team_name":"Platform team",
           "team_desc":"The team is responsible for building our own proprietary financial platform, as well as our real-time high-throughput data processing pipeline",
           "duties":[
              "Build and maintain the underwriting pipeline for all product flows",
              "Architect the offline infrastructure to be used by Data Science for iterating and improving credit and fraud models"
           ]
        }
     ]
  },
  {
     "fa_class":"fa fa-heartbeat",
     "title":"Jawbone",
     "link": "https://jawbone.com/",
     "loc":"San Fransisco, CA",
     "dates":"2014 - 2015",
     "position":"Senior Software Engineer",
     "body":[
        {
           "team_name":"Insights & Intelligence team",
           "team_desc":"The team is responsible for building an intelligent guide that helps our users make good health choices",
           "duties":[
              "Building the core intelligence for the Smart Coach brand",
              "Building the Insights system and the internal CRM system to manage the insight content"
           ]
        }
     ]
  },
  {
     "fa_class":"fa fa-comment",
     "title":"Hearsay Social",
     "link": "https://hearsaysystems.com/",
     "loc":"San Fransisco, CA",
     "dates":"2012 - 2014",
     "position":"Full stack developer",
     "body":[
        {
           "team_name":"Engagement team",
           "team_desc":"Team's goal was to keep the user engagement up and unblock any onboarding issues (growing the monthly active users)",
           "duties":[
              "Designed and developed a notification platform for our software",
              "Worked on building the analytics and reporting framework"
           ]
        }
     ]
  },
  {
     "fa_class":"fab fa-windows",
     "title":"Microsoft Inc",
     "link": "https://www.bing.com",
     "loc":"Seattle, WA",
     "dates":"2009 - 2012",
     "position":"SDE II",
     "body":[
        {
           "team_name":"Bing - Relevance",
           "team_desc":"Team was responsible for ranking the top documents in Bing's algorithmic web search results (Top 100K queries)",
           "duties":[
              "Developing new algorithms to extract ranking signals and features from petabytes of user browsing activity logs",
              "Using data mining and machine learning techniques to optimize user satisfaction metrics"
           ]
        },
        {
           "team_name":"Windows Live",
           "team_desc":"Worked with two separate groups (Service Management / Monetization) on delivering project critical components",
           "duties":[
              "Implemented a service for syncing data from a system store to a DHCP server (for the server to hand out correct IP leases required for PXE booting)",
              "Helped design the next generation monetization solution to better target Hotmail users"
           ]
        }
     ]
  },
  {
     "fa_class":"fa fa-code",
     "title":"Internships",
     "loc":"Various Locations",
     "dates":"2004 - 2009",
     "position":"Intern",
     "body":[
        {
           "team_name":"Microsoft Corporation",
           "team_desc":"Windows Live Mesh - May 2009 – Aug 2009",
           "duties":[
              "Created an assembly that provisioned a delegated authentication token management service"
           ]
        },
        {
           "team_name":"Amazon.com Inc",
           "team_desc":"Personalization - Aug 2007 - Dec 2007",
           "duties":[
              "Worked on a ranking mechanism to generate a tag set which describe the list recommended items"
           ]
        },
        {
           "team_name":"Sun Microsystems",
           "team_desc":"Complex Systems Group - Jan 2006 - Apr 2006",
           "duties":[
              "Participated in the design and development of a simulation infrastructure for the behavioral analysis of wireless sensor networks"
           ]
        },
        {
           "team_name":"Amazon.com Inc",
           "team_desc":"Digital Media Technologies - May 2005 - Aug 2005",
           "duties":[
              "Worked on the variety of upgrades to the digital media pipeline (mainly the first internal REST client to the S3 service)"
           ]
        },
        {
           "team_name":"Epson Canada",
           "team_desc":"Barcode Recognition - Jan 2004 - Apr 2004",
           "duties":[
              "Developed a universal 2D barcode decoding application for hand-held image-scanners"
           ]
        }
     ]
  }
]


function ExperienceDutyDisplayComponent(props){

    var duty = props.items;
    return (
      <div> - { duty }</div>
    )
}

function ExperienceContentDisplayComponent(props){

    var content = props.items;

    var rows = [];
    content.duties.map(function(duty, i){
      rows.push(<ExperienceDutyDisplayComponent items={duty} key={'duty_' + i}/>)
    });

    var team_name = "";
    if (content.team_name){ 
      team_name = <span>{content.team_name } :</span>;
    }

    return (
      <div className="timeline-body">
        <br/>
        <div>
        { team_name }
        </div>
        { content.team_desc }
        { rows }
      </div>
    )
}

function ExperienceDisplayComponent(props){
    var work = props.items;

    var rows = [];
    work.body.map(function(content, i){
      rows.push(<ExperienceContentDisplayComponent items={content} key={'content_' + i}/>);
    });

   return (
      <li className="timeline-inverted">
        <div className="timeline-badge bg-white"><i className={work.fa_class }></i></div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h6 className="timeline-title"><a href={work.link}>{ work.title }</a></h6>
            <div className="timeline-location">{ work.loc }</div>
            <div className="timeline-dates">{ work.dates }</div>
            <div className="timeline-position"><b>{ work.position }</b></div>
            { rows }
          </div>
        </div>
      </li>

    )
}

export default function ExperienceComponent(props){
    var rows = [];

    var experiences = PRASHANT_EXPERIENCE;
    experiences.map(function(experience, i){
      rows.push(<ExperienceDisplayComponent items={experience} key={'experience_' + i} />);
    });

    return (
      <section id="experience" className="content-section ">
        <div className="py-3">
            <div className="container">
            {(props.background_density !== undefined)? <BackgroundPolygonComponent density={props.background_density}/>: '' }
              
              <h2 className="text-center">Experience</h2>
              <ul className="timeline">
                {rows}
              </ul>

            </div>
          </div>
      </section>
    )
}
