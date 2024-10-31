import './Experience.css'
import data from './Experiences.json'

const Experience = () => {
    const calcDuration = (dates) => {
        const [start, end] = dates.split(' - ');

        const [sYear, sMonth] = start.split('/').map(Number);

        // Create a Date object for the extracted date
        const startDate = new Date(sYear, (sMonth ?? 1) - 1); // month is 0-indexed in JavaScript

        const endDate = new Date();

        if (end !== 'Present') {
            const [eYear, eMonth] = end.split('/').map(Number);
            endDate.setFullYear(eYear, eMonth - 1)
        }

        // Calculate the difference in years and months
        let yearsDiff = endDate.getFullYear() - startDate.getFullYear();
        let monthsDiff = endDate.getMonth() - startDate.getMonth();

        // Adjust for negative months difference
        if (monthsDiff < 0) {
            yearsDiff--;
            monthsDiff += 12;
        }

        // Format the output string
        const yearText = yearsDiff > 0 ? `${yearsDiff} yr${yearsDiff > 1 ? 's' : ''}` : '';
        const monthText = monthsDiff > 0 ? `${monthsDiff} mos` : '';

        // Combine results, ensuring proper formatting
        return [yearText, monthText].filter(Boolean).join(' ').trim() || '0 mos';
    }

    return (
        <>
            <h2 className="title">Work Experience</h2>

            {data.map((job) => (
                <div className="job">
                    <div className="job-info">
                        <div className="titles">
                            <h3 className="position">{job.position}</h3>
                            {job.company && <h4 className="compony">{job.company}</h4>}
                        </div>
                        <div className='extra'>
                            <div>{job.dates_employed}</div>
                            <div>({calcDuration(job.dates_employed)})</div>
                            {job.location && <p>{job.location}</p>}
                        </div>
                    </div>
                    <p className='job-desc'>{job.description}</p>
                    <div dangerouslySetInnerHTML={{ __html: job.content }} />
                </div>
            ))}
            <hr />
        </>
    )
}

export default Experience;