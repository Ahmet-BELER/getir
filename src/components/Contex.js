import {createContext,useState} from 'react';



function ProductPage({ productId }) {
    const  [product, setProduct] = useState(null);
    const
  
    useEffect(() => {
      // By moving this function inside the effect, we can clearly see the values it uses.
      async function fetchProduct() {
        const response = await fetch('http://myapi/product/' + productId);
        const json = await response.json();
        setProduct(json);
      }
  
      fetchProduct();
    }, [productId]); // ✅ Valid because our effect only uses productId
    // ...
  }

  export default ProductPage;
