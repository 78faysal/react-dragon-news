import { Link, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import { useEffect, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";

const NewsDetail = () => {
    const [detail, setDetail] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch('/news.json')
        .then(res => res.json())
        .then(data => {
            const selectedNews = data.find(news => news._id  == id)
            setDetail(selectedNews);
        })
    }, []) 

    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid grid-cols-4 mt-10 gap-10">
                <div className="col-span-3">
                    <h2 className="text-3xl">News Details</h2>

                    <div className="space-y-3">
                        <img src={detail.image_url} alt="" />
                        <h2 className="text-2xl">{detail.title}</h2>
                        <p>{detail.details}</p>
                        <Link className="btn btn-primary" to='/'>See All News</Link>
                    </div>
                </div>
                <div className="col-span-1">
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;