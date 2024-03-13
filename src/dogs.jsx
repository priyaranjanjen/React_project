import { useState } from 'react';
import './dogs.css';
function FetchDog(){

    const [selectBreed, setSelectBreed] = useState()
    const [breedImage, setBreedImage] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const fetchApi = async(e) =>{

        if(e.target.value === "random"){
            let rawApiData = await fetch("https://dog.ceo/api/breeds/image/random");
            let finalApiData = await rawApiData.json();
            setBreedImage(finalApiData.message);
            console.log(finalApiData.message);
        }

        let rawApiData = await fetch(`https://dog.ceo/api/breed/${e.target.value}/images`)
        let finalApiData = await rawApiData.json();
        // console.log(finalApiData);  
        // return finalApiData;

        setBreedImage(finalApiData.message)
        // console.log(breedImage);
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => prevIndex+1);
    }

    return(
        <div className="content">
            <label htmlFor="dogs">Select A Breed: </label>
            <select name="dogs-list" onChange={fetchApi}>
                <option value="random" >Random</option>
                <option value="beagle">Beagle</option>
                <option value="boxer">Boxer</option>
                <option value="dalmatian">Dalmatian</option>
                <option value="husky">Husky</option>
            </select>
            <div>
                <img src={breedImage[currentImageIndex]} alt={selectBreed}></img>
            </div>
            <div>
                <button onClick={nextImage}>Next</button>
            </div>
        </div>
    )
}

export default FetchDog;