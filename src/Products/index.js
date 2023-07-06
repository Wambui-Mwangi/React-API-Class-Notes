import React, {useState, useEffect} from "react";


const Products = () =>{
    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(false)

    useEffect(()=>{
        (async ()=>{
            getProducts();
        })();
    },[]);

    const getProducts = async () =>{
        try{
        setloading(true)
        const response = await fetch('https://dummyjson.com/products')
        const result = await response.json();
        setproducts(result.products);
        setloading(false)
        }
        catch(error){
            console.log(error.message);
        }
    };
    console.log({products});
    
    if (loading) {
        return <h2>Loading...</h2>
    }
    return(
        <div>
            {products.map(item=>(
                <div key = {item.id}>
                    <h3>{item.title}</h3>
                </div>
            ))}

        </div>

    )
}

export default Products;