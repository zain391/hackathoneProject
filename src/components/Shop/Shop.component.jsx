import React from 'react'
import SHOP_DATA from './Shop.data';
import CollectionPreview from '../collection-preview/CollectionPreview';
class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections:SHOP_DATA,  
        }
    }
    render(){
        const {collections}=this.state
        return(
            <div className='shop-page'>
                {
                    collections.map(({id,...otherCollectionProps})=>{
                        return <CollectionPreview key={id} {...otherCollectionProps}/>
                    })
                }      
            </div>
        )
    }
}
export default Shop;
