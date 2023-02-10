import items from "../Data/Items";

let iterator = 1;
    let classToBeAdded = "";
    let toBeRenderedFigures = items.bacardi.map(bacardi => {
        switch(iterator){
            case 1:
                classToBeAdded += "galleryCard__figure galleryCard__figure--big";
                break;
            case 2:
                classToBeAdded += "galleryCard__figure galleryCard__figure--middle";
                break;
            case 3: 
                classToBeAdded += "galleryCard__figure galleryCard__figure--middle";
                break;
            default: 
                classToBeAdded = "galleryCard__figure galleryCard__figure--small";
                break;
        }
        iterator += 1;
        return (
            <figure className={classToBeAdded}>
                <img className="galleryCard__img" src={bacardi.image} alt={bacardi.alt}></img>
            </figure>
        )
    })

    export default toBeRenderedFigures;
