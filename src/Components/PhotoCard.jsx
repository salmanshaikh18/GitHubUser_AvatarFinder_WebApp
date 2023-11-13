import './PhotoCard.css'

const PhotoCard = ({ id, url }) => {
    return (
        <div id="photoCard">
            <div id="box">
                <img src={url} />
                <h1>{id}</h1>
            </div>
        </div>
    )
}

export default PhotoCard