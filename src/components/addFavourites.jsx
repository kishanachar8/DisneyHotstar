import '../css/addFavourites.css'
import { useState } from 'react'
import  {useNavigate} from 'react-router-dom'
const AddFavourites = () => {
    let [title,setTitle]=useState("")
    let [genre,setGenre]=useState("")
    let [language,setLanguage]=useState("")
    let [rating,setRating]=useState("")
    let navigate = useNavigate()

    let handleSubmit = (e)=>{
        e.preventDefault()  //to prevent reload
        let data={title,genre,language,rating}
        fetch('http://localhost:1000/favourites',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        navigate('/movies')
    }
    let reset=()=>{
        setTitle("")
        setGenre("")
        setLanguage("")
        setRating("")
    }
    return ( 
        <div className="addFavourites">
            <h1 style={{color:"white",textAlign:"center",fontFamily:"cursive"}}>Add To Favourites</h1>
            <div className="form">
            <div className="form_image"></div>
            <div className="form_input">
                <form action=""onSubmit={handleSubmit}>
                    <div className="title">
                        <input type="text"  required placeholder="Enter the Title" name="" id="" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div className="genre">
                        <input type="text" required placeholder="Enter the Genre" name="" id="" value={genre} onChange={(e)=>setGenre(e.target.value)}/>
                    </div>
                    <div className="language">
                        <input type="text" required placeholder="Enter the Language" name="" id="" value={language} onChange={(e)=>setLanguage(e.target.value)} />
                    </div>
                    <div className="rating">
                        <input type="text" required placeholder="Enter the Rating" name="" id="" value={rating} onChange={(e)=>setRating(e.target.value)} />
                    </div>
                    <div className="btn1">
                        <button type='submit'>Add to Favourites</button>
                        <button type='reset' onClick={reset}>Reset</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
     );
}
 
export default AddFavourites;