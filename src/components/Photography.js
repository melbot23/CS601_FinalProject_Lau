// Photography page

import images from '../data/assets.json';
import '../css/Photography.css';
import '../css/Layout.css';

export default function Photography() {
    return (
        <div>
            <div className="header">
                <h2 className="page-title">My Photo Journal</h2>
                <em className="page-subtitle">Snapshots from my journeys around the world</em>
            </div>
            <main className="photo-gallery">
                {/* Map JSON data to render photos on Photography page */}
                {images.map(({ id, src, caption }) => (
                    <figure key={id} id={id} className="gallery-item">
                        <img src={src} alt={caption} />
                        <figcaption>{caption}</figcaption>
                    </figure>
                ))}
            </main>
        </div>
    );
}