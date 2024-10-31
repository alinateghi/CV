import ProfileImage from './ali.jpg'
import Skills from './Skills.json'
import './Nav.css'

const Nav = () => {
    return (
        <>
            <div className='profile-img'>
                <img src={ProfileImage} alt='Ali Nateghi' />
            </div>

            <section className="section">
                <h2 className='title'>About Me</h2>
                <p>I am a passionate software developer with a strong focus on backend development and a commitment to delivering high-quality solutions. With expertise in PHP and Laravel, I excel at creating scalable applications that enhance user experiences and streamline processes.
                    My journey has equipped me with a diverse skill set, including experience in full-stack development and technical leadership. I enjoy working collaboratively in teams to inspire innovation and support ongoing growth.</p>
            </section>

            <section className="section">
                <h2 className='title'>Technical SKILLS</h2>
                {Skills.map((skill) => (
                    <div>
                        <h3>{skill.title}</h3>
                        <ul className='skill-list'>
                            {skill.list.map((l) => (
                                <li>{l}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className="section">
                <h2 className='title'>LANGUAGES</h2>
                <ul>
                    <li>Persian (Native)</li>
                    <li>English (Intermediate)</li>
                </ul>
            </section>
        </>
    )
}

export default Nav;