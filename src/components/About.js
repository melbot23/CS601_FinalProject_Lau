// About page

import '../css/About.css';
import '../css/Layout.css';

export default function About() {
    return (
        <div className="page-layout">
            <header className="header">
                <h2 className="page-title">About Melanie</h2>
            </header>
            <main className="about-main">
                <img className="img" src="/assets/boston.jpg" alt="city skyline"></img>
                <p className="description">
                    Melanie is from the beautiful island state of Hawaii. She graduated
                    from Emerson College with a BFA in creative writing, and 
                    currently attends Boston University Metropolitan College
                    for the Master's Program in Computer Information Systems.
                    She loves puzzles, which she feels is the defining characteristic
                    of both writing and technology: how do you put the pieces
                    together to tell a story? She has traveled to four continents
                    and enjoys documenting her experiences. Though she misses the
                    beach, she has found a new home among the Blue Ridge mountains in Virginia.
                </p>
            </main>
        </div>
    );
}