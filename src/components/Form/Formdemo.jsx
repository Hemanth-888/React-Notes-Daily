import { useState } from "react"


export function FormDemo()
{
    const [product, setProduct] = useState({Name:'TV', Price:0, City:'Delhi', Stock:true});

    function handleNameChange(e){
        setProduct({
            Name: e.target.value,
            Price: product.Price,
            City: product.City,
            Stock: product.Stock
        })
    }
    function handlePriceChange(e){
        setProduct({
            Name: product.Name,
            Price: parseFloat(e.target.value),
            City: product.City,
            Stock: product.Stock
        })
    }
    function handleCityName(e){
        setProduct({
            Name: product.Name,
            Price: product.Price,
            City: e.target.value,
            Stock: product.Stock
        })
    }
    function handleStockChange(e){
        setProduct({
            Name: product.Name,
            Price: product.Price,
            City: product.City,
            Stock: e.target.checked
        })
    }

    function handleSubmitClick(){
        console.log(product);
    }

    return(
        <div className="container-fluid">
            <div>
                <h3>Register Product</h3>
                <dl>
                    <dt>Product Name</dt>
                    <dd><input type="text" value={product.Name} onChange={handleNameChange} /></dd>
                    <dt>Price</dt>
                    <dd><input type="number" value={product.Price} onChange={handlePriceChange} /></dd>
                    <dt>City</dt>
                    <dd>
                        <select value={product.City} onChange={handleCityName}>
                            <option>Select City</option>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                    <dt>Stock</dt>
                    <dd><input type="checkbox" checked={product.Stock} onChange={handleStockChange} /> <label>Available</label> </dd>
                </dl>
                <button onClick={handleSubmitClick}>Submit</button>
            </div>
        </div>
    )
}