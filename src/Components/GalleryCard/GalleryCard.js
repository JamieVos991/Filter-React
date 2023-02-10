import "./GalleryCard.css";
import getToBerenderedFigures from "../../Helper/GalleryCardHelper";

const GalleryCard = (props) => {
    return (
        <article className="galleryCard">
            {getToBerenderedFigures(props.items)}
        </article>
    );
}

export default GalleryCard;