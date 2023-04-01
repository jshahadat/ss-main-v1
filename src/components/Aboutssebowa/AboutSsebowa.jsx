import "./AboutSsebowa.css";
import googleplay from "../../assets/images/about/googleplay.png";
import appstore from "../../assets/images/about/appstore.png";
import tree from "../../assets/images/about/tree.png";

const AboutSsebowa = () => {
    return (
        <div className="container"> 
            <div className="container aboutssebowa-main d-flex">
                <div className="row circle-box">
                    <div className="col-md-6 p-3 my-2 main-Img_wrapper">
                        <div className="imgdoubleborder">
                            <img src={tree} className=" aboutssebowaimg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 aboutssebowaDesc my-2">
                        <h3>Learn About Ssebowa </h3>
                        <p>The more you use Ssebowa, the more you realize how minor daily changes can make major differences in the world.</p>
                        <div className="availabilyimages">
                            <a href={"/"} className="availability-img-main" ><img src={googleplay} alt="" className="me-3 availability-img img-fluid" /></a>
                            <a href={"/"} className="availability-img-main" ><img src={appstore} alt="" className="img-fluid availability-img" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSsebowa;
