import "./About.scss"

export default function About() {
    return (
        <div id="about-sect">
            <h2>About Me</h2>
            <div id="work-experience-sect">
                <h1>My Work Experience</h1>
                <div id="work-experience-list">
                    <div className="job-item">
                        <h2>Modelling/Optimization Engineer</h2>
                        <div>
                            <h3>Kinewell Energy</h3>
                            <h4>Jul 24 - Apr 25</h4>
                        </div>
                    </div>
                    <div className="job-item">
                        <h2>Software Engineer II</h2>
                        <div>
                            <h3>Cadence</h3>
                            <h4>Jul 24 - Apr 25</h4>
                        </div>
                    </div>
                    <div className="job-item">
                        <h2>Physics Master's Degree</h2>
                        <div>
                            <h3>University of Manchester</h3>
                            <h4>Sept 18 - Jun 22</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}