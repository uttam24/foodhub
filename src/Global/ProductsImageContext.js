import React, {createContext} from "react";
import{ProductReducer} from "./ProductReducer";

import ProductImg from './ProductImg';

export const ProductShop = createContext();
const ProductsImageContext=(props)=>{
	return(
		<ProductShop.Provider value={{ProductImg:[...ProductImg]}}>
			{props.children}
		</ProductShop.Provider>
	)
}

export default ProductsImageContext