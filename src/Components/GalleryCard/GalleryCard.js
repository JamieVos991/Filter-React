import "./GalleryCard.css";
import toBeRenderedFigures from "../../Helper/GalleryCardHelper";

function GalleryCard() {

    return (
        <article className="galleryCard">
            {toBeRenderedFigures}
        </article>
    )
}

export default GalleryCard