import "../css/movies.css";
import { useState } from "react";
import MoviesLogic from "./moviesLogic";
import { useEffect } from "react";
const Movies = () => {
    let [favoritesData,setvalue] = useState([])

    useEffect(()=>{
        let fetchData = async()=>{
        let response=await fetch('http://localhost:1000/favourites')
        let data=await response.json()
        console.log(data);
        setvalue(data)
        }
        fetchData()
    },[])
        
    let handleRemove=(id,title)=>{
    setvalue(favoritesData.filter( (x)=>x.id !==id))
    // alert(`${title} has been removed from favourites`)
    }
    return (
        <div className="movies">
            <h1 style={{textAlign:"center"}}>Favorites of all time</h1>
            <div className="favs">
                <MoviesLogic title="Favourites of All Time"
                data={favoritesData} fn={handleRemove}
                />
                <h1 style={{textAlign:"center"}}>Top Rated</h1>
                <MoviesLogic title="Top Rated"
                data={favoritesData.filter(x => x.rating>=4.5)} fn={handleRemove}
                />
                <h1 style={{textAlign:"center"}}>English</h1>
                <MoviesLogic title="Language"
                data={favoritesData.filter(x => x.language === 'English')} fn={handleRemove}
                />
            </div>
        </div>
    );
};

export default Movies;
