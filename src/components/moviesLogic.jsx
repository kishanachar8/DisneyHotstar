const MoviesLogic = (props) => {
    let favoritesData=props.data
    let handleRemove=props.fn
    // let title=props.title
    return ( 
        <div className="favs">
            {/* <h1>Favourites of All Time</h1> */}
            {/* <h1>{title}</h1> */}
            <div className="favs">
            {favoritesData.map((data)=>
                <div className="favs_list">
                    {/* <h3>{data.id}</h3> */}
                    <h2>{data.title}</h2>
                    <p>{data.language}/{data.genre}</p>
                    <p>{data.rating}⭐</p>
                    <button onClick={()=>handleRemove(data.id,data.title)}>Remove</button>
                </div>
            
                )}
                </div>
        </div>
     );
}
 
export default MoviesLogic;