import React, {createContext} from "react";

import ItemName from './ItemName';



export const ProductsContext = createContext();
const ProductsContextProvider=(props)=>{
	return(
		<ProductsContext.Provider value={{ItemName:[...ItemName]}}>
			{props.children}
		</ProductsContext.Provider>
	)
}

export default ProductsContextProvider