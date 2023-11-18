import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';


const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3">
                <h2 className="text-2xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full mt-2">
                    <FaGithub />
                    Github
                </button>
            </div>
            <div className="p-4">
                <h2 className="text-2xl mb-3">Find Us On</h2>
                <a className="p-4 flex items-center gap-2 text-lg border rounded-t-lg" href="">
                    <FaFacebook />
                    Facebook
                </a>
                <a className="p-4 flex items-center gap-2 text-lg border-x" href="">
                    <FaTwitter />
                    Twitter
                </a>
                <a className="p-4 flex items-center gap-2 text-lg border rounded-b-lg" href="">
                    <FaInstagram />
                    Instagram
                </a>
            </div>
            <div className="p-4 space-y-3">
                <h2 className="text-2xl">Q Zone </h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;