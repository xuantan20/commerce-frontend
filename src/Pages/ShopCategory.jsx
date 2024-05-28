import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'
const ShopCategory = (props) => {
  const {allProduct} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt=""/>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt=""/>
        </div>
      </div>
      <div className="shopcategor-products">
        
        {allProduct.map((item, key)=>{
          if(props.category === item.category){
            return <Item 
            key={key} 
            id={item.id} 
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}/>

          }else{
            return null;
          }
      })}
      </div>
    </div>
  )
}

export default ShopCategory