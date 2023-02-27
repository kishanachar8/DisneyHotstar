import "../css/home.css";
import banner from '../img.jpg'
const Home = () => {
    let db = [
        {
            image: "images/avatar.webp",
        },
        {
            image: "images/super30.webp",
        },
        {
            image: "images/vikramveda.webp",
        },
        {
            image: "images/seetharama.webp",
        },
        {
            image: "images/raid.webp",
        },
        {
            image: "images/monster.webp",
        },
        {
            image: "images/paisa.webp",
        },
        {
            image: "images/freddy.webp",
        },
        {
            image: "images/totaldhamaal.webp",
        },
        {
            image: "images/thanaji.webp",
        },
        // {
        //     image: "images/sammohanam.webp",
        // },
    ];
    return (
        <div className="home">
            <div className="banner">
                <div className="description">
                    <p>All time best worthy movies in just one click</p>
                    <button>Subscribe Now</button>
                </div>
                <div className="banner_image">
                    <img width="900px" src={banner} alt="" />
                </div>
            </div>
            <div className="movies_list">
                <h1>Recommended for you</h1>
                {/* <img src="images/avatar.webp" alt="" />
                <img src="images/baby.webp" alt="" />
                <img src="images/seetharama.webp" alt="" />
                <img src="images/raid.webp" alt="" />
                <img src="images/vikramveda.webp" alt="" /> */}
                {db.map((data) =>(
                    <img src={data.image} alt=""/>
                ))}
            </div>
        </div>
    );
};

export default Home;
