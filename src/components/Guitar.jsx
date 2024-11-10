import react, {useState , useEffect} from "react";
import { db } from "../data/db";


const Guitar = () => {
    const guitar = db;

      return (
        <div className="row">
            {guitar.map((item) => (
                <div key={item.id} className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src={`../../public/img/${item.image}.jpg`} alt="imagen guitarra" />
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{item.name}</h3>
                    <p>{item.description}</p>
                    <p className="fw-black text-primary fs-3">{item.price}$</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100"
                    >Agregar al Carrito</button>
                </div>
                </div>
            ))}
        </div>

        
    );
};

export default Guitar;