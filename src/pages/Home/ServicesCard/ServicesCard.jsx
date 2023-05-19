import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ServicesCard = ({ service }) => {

    // eslint-disable-next-line react/prop-types
    const {_id ,title, img, price } = service;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p >${price}</p>
                    <div className="card-actions">
                       <Link to={`/checkout/${_id}`}>  <button className="btn btn-primary">Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;