import axios from "axios";
import { useEffect, useRef, useState } from "react"

export function CarouselDemo(){


    const [product, setProduct] = useState({id:0, title:'', price:0, description:'', image:'', rating:{rate:0, count:0}, category:''});

    let productId = useRef(1);

    function LoadProduct(id){
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
             setProduct(response.data);
        })
    }

    useEffect(()=>{
         LoadProduct(1);
    },[])

    function NextClick(){
        productId.current = productId.current + 1;
        LoadProduct(productId.current);
    }

    function PreviousClick(){
        productId.current = productId.current - 1;
        LoadProduct(productId.current);
    }


    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="card m-4 p-4 w-50">
                <div className="card-header text-center">
                    {product.title}
                </div>
                <div className="card-body row">
                    <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                        <button onClick={PreviousClick} className="btn btn-dark bi bi-chevron-left"></button>
                    </div>
                    <div className="col-10 position-relative">
                        <div className="position-absolute badge bg-danger p-2 fs-5 text-white rounded rounded-circle end-0 top-0">
                            {product.price.toLocaleString('en-us', {style:'currency', currency:'USD'})}
                        </div>
                        <img height="300" src={product.image} width="100%" />
                    </div>
                    <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                    <button onClick={NextClick} className="btn btn-dark bi bi-chevron-right"></button>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <input type="range" className="form-range" />
                    <div className="my-2">
                        <button className="btn btn-primary bi bi-play"></button>
                        <button className="btn btn-warning bi bi-pause mx-2"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}