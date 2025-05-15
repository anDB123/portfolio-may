import "./Projects.scss"

export default function Projects() {
    return (
        <div id="projects-sect">
            <h1 id="title">Projects</h1>
            <div id="projects-grid">
                <a className="projectHero" href="https://pool-table-ivory.vercel.app">
                    <h1>Pool Game</h1>
                    <img src="pool.png"></img>
                </a>
                <a className="projectHero" href="https://oscilloscope-pcfs0ftvg-andb123s-projects.vercel.app">
                    <h1>Oscilloscope</h1>
                    <img src="oscilloscope.png"></img>
                </a>
                <a className="projectHero" href="https://washing-machine-tau.vercel.app">
                    <h1>Washing Machine</h1>
                    <img src="washingMachine.png"></img>
                </a>
            </div>

        </div >
    );
}