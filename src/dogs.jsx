import { useEffect, useState } from 'react';
import './dogs.css';
function FetchDog(){

    const [breedImage, setBreedImage] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const fetchApi = async(e) =>{

        let finalApiData;
        setCurrentImageIndex(0);

        try {
            if(e.target.value === "random"){
                let rawApiData = await fetch("https://dog.ceo/api/breeds/image/random");
                finalApiData = await rawApiData.json();

                console.log(finalApiData);

                setBreedImage([finalApiData.message]);
            }else{
                let rawApiData = await fetch(`https://dog.ceo/api/breed/${e.target.value}/images`)
                finalApiData = await rawApiData.json();
                
                setBreedImage(finalApiData.message)
            }

            console.log(breedImage);
        } catch (error) {
            alert("Error in fetching Data");
        }
    }

    useEffect(() => {
        const randomPic = async() => {
            try {
                const rawApiData = await fetch("https://dog.ceo/api/breeds/image/random");
                const finalApiData = await rawApiData.json();
    
                setBreedImage([finalApiData.message]);
            } catch (error) {
                console.log("error!")
            }
        }

        randomPic();
    }, [])

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
                <img src={breedImage[currentImageIndex]} alt={currentImageIndex}></img>
            </div>
            <div>
                <button onClick={nextImage}>Next</button>
            </div>
        </div>
    )
}

export default FetchDog;

// http://dog.ceo/api/breeds/list/all