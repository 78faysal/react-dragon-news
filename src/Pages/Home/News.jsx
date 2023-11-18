import { Link } from "react-router-dom";

const News = ({ news }) => {
    const { title, image_url, details, _id } = news;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl mb-16">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                </div>
                <figure><img className="px-10" src={image_url} alt="" /></figure>
                <div className="card-body">
                    {
                        details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-500 font-bold">Read More...</Link></p> :
                        <p>{details}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default News;