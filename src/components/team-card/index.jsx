import PropTyps from "prop-types";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import './TeamCard.css'

const TeamCard = ({ data }) => {
    return (
        <Col >
            <div style={{ border: "none" }} className="team-box">
                <img

                    variant="top"
                    src={process.env.PUBLIC_URL + data.thumb}
                    alt="img"
                    className="rounded-circle team-imgs text-center"

                />
                <div style={{ textAlign: "center", paddingLeft: "20px", paddingTop: "10px" }}>
                    <h1 className="team-name">{data.name}</h1>
                    {/* <Card.Title className="team-name">{data.name}</Card.Title> */}
                    <p className="team-role">{data.designation}</p>
                    {/* <Card.Text className="team-role">{data.designation}</Card.Text> */}
                </div>
            </div>
        </Col >
    );
};

TeamCard.propTypes = {
    data: PropTyps.object,
};

export default TeamCard;
