import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl mb-5">All Categories</h2>
            <div className="space-y-4">
            {
                categories.map(category => <Link className="block text-xl font-semibold" to={`/category/${category.id}`} key={category.id}>{category.name}</Link>)
            }
            </div>
        </div>
    );
};

export default LeftSideNav;