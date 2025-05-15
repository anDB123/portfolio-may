import "./Projects.scss"

export default function Projects() {
    return (
        <div id="projects-sect">
            <h1 id="title">Projects</h1>
            <div id="projects-grid">
                <div className="projectHero">
                    <h1>Pool Game</h1>
                    <img src="pool.png"></img>
                </div>
                <div className="projectHero">
                    <h1>Oscilloscope</h1>
                    <img src="oscilloscope.png"></img>
                </div>
                <div className="projectHero">
                    <h1>Washing Machine</h1>
                    <img src="washingMachine.png"></img>
                </div>
            </div>

        </div>
    );
}