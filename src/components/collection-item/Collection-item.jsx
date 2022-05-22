import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../firebase/Firebase.utiles';
import './collection_item.scss'
const CollectionItem = ({ id, imageUrl, name, price }) => {
    const [documents, setDocuments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const collectionName = "users"
    const docsCollectionRef = collection(firestore, collectionName)


    const readDocs = async () => {

        let array = []

        const querySnapshot = await getDocs(docsCollectionRef);
        querySnapshot.forEach((doc) => {
            

            array.push({ ...doc.data(), id: doc.id })
        });

        setDocuments(array)
        setIsLoading(false)
    }

    useEffect(() => {
        readDocs()
    }, [])
    const navigate=useNavigate();
    return (
        <div className='collection-item'>
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="collection-footers">
                    <span className="name text-white">{name}</span>
                    <span className="price text-white">{price}</span>
                </div>

            </div>
                    <button className='btn btn-success' onClick={()=>{navigate("/singup")}}>add to cart</button>

        </div>
    )
}
export default CollectionItem;