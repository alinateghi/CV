import data from './Educations.json'
import './Education.css'

const Education = () => {
    return (
        <>
            <h2 className="title">Education</h2>

            {data.map((education) => (
                <div className="education">
                    <div className='titles'>
                        <div><b>{education.degree}</b> in <b>{education.field}</b></div>
                        <div>{education.university}</div>
                    </div>
                    <div className='extra'>
                        <div>{education.dates_attended}</div>
                        <div>{education.location}</div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Education;