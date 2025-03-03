import axios from "axios";
import { useEffect, useState } from "react"



export function Nasa(){

    const [marsObject, setMarsObject] = useState({photos:[]});


    useEffect(()=>{

        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&#39')
        .then(response=>{
            setMarsObject(response.data);
        })

    },[])

    return(
        <div className="container-fluid">
            <h3>Mars Rover Photos</h3>
            <main className="d-flex flex-wrap">
                {
                    marsObject.photos.map(item=>
                    <div key={item.id} className="card m-3 p-2 w-25">
                        <img src={item.img_src} className="card-img-top" height="100" />
                        <div className="card-header">
                            <div className="h3">{item.id}</div>
                        </div>
                        <div className="card-body">
                                <dl>
                                    <dt>Camera Name</dt>
                                    <dd>{item.camera.full_name}</dd>
                                    <dt>Rover Name</dt>
                                    <dd>{item.rover.name}</dd>
                                </dl>
                        </div>
                    </div>
                   )
                }
            </main>
        </div>
    )
}