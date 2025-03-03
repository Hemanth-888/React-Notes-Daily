import { useState } from "react";
import { DataGrid } from "./data-grid";


export function CustomDemo(){


    const [products, setProducts] = useState([
        {Id:1, Name:'Samsung TV', Price:14300, Stock:'Available'},
        {Id:2, Name:'Mobile', Price:24300, Stock:'Out of Stock'},
        {Id:3, Name:'Watch', Price:4300, Stock:'Available'}
    ]);

    return(
        <div className="container-fluid">
            <h3>Grid-1</h3>
            <DataGrid  caption="Employee Details" records={[{FirstName:'Raj', LastName:'Kumar', Designation:'Manager'},{FirstName:'Kiran', LastName:'Kumar', Designation:'Clerk'}]} fields={['First Name', 'Last Name', 'Designation']} />
            <h3>Grid-2</h3>
            <DataGrid records={products} caption="Product Details" fields={['Id', 'Name', 'Price', 'Stock']} />
        </div>
    )
}