import './PhotoCard.css'

const PhotoCard = ({ id, url }) => {
    return (
        <div id="photoCard">
            <div id="box">
                <div className="imgBox">
                    <img src={url} />
                </div>
                
                <h1>{id}</h1>
            </div>
        </div>
    )
}

export default PhotoCard