import React from 'react';
import data from './Educations.json';
import './Education.css';

const Education = () => {
  return (
    <>
      <h2 className="title">Education</h2>

      {data.map((education, index) => (
        <div className="education" key={index}>
          <div className="titles">
            <div>
              <b>{education.degree}</b> in <b>{education.field}</b>
            </div>
            <div>{education.university}</div>
          </div>
          <div className="extra">
            <div>{education.dates_attended}</div>
            <div>{education.location}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Education;
