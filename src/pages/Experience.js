import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import LightBulbIcon from "@mui/icons-material/Lightbulb";
import "../styles/Experience.css";

function Experience() {
  return (
    <div>
      <VerticalTimeline lineColor="#0d3376">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012-2015"
          iconStyle={{ background: "#198dc6", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Iligan Computer Institute
          </h3>
          <p>2 Years Diploma in Information Technology</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015-2022"
          iconStyle={{ background: "#bc556b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Iligan Computer Institute - Kapatagan
          </h3>
          <h4>
            Created promotional materials and deploy engaging designs for the
            company
          </h4>
          <p>Part-Time Graphic Designer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016-May 2022"
          iconStyle={{ background: "#bc556b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Iligan Computer Institute - Kapatagan
          </h3>
          <h4>
            Teach senior high students the basics of Graphic design as well as
            basics in programming. Created learning materials to help students
            learn amidst the pandemic.
          </h4>
          <p>Full-Time Instructor</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--training"
          date="June 2022 - August 2022"
          iconStyle={{ background: "#ffc800", color: "#fff" }}
          icon={<LightBulbIcon />}
        >
          <h3 className="vertical-timeline-element-title">KodeGo</h3>
          <h4>
            Undergone a bootcamp/training for Web Development. Tackled the basic
            HTML, CSS, JavaScript, PHP. Libraries like JQuery, React.Js, AOS,
            Chart.Js, Particle.Js. Frameworks like Bootstrap, Node.Js, and
            Laravel. Also tackled MySql for the backend
          </h4>
          <p>Full-Time Trainee</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
