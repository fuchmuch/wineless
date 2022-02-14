import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



// import { Rating } from 'react-simple-star-rating';


export default function StoreDetails() {
  const [selectedStore, setSelectedStore] = useState(null);
  const [stores, setStores] = useState([]);
  const [id, setId]= useState('')

  
  let { name } = useParams()
 


  const getId = (stores) =>{
  for (let i = 0; i < stores.length; i++) {
    const s = stores[i];
  let convertedName = s.name.split(" ").join('-').toLowerCase()
    if (name ===convertedName){
      console.log('sucsess')
      setId(s._id)      
    }
  }
  }
  const getStores = async () => {
    const res = await axios.get(`http://localhost:8000/stores`);
    setStores(res.data);
    getId(res.data)
  };


  const getStore = async () => {
    console.log('this is get store function>>>>',id)
    const res = await axios.get(
      `http://localhost:8000/stores/${id}`
    );
    setSelectedStore(res.data);
  };

  const deleteStores = async (storeId) => {
    console.log(`this is line 35 ${storeId}`);
    const res = await axios.delete(`http://localhost:8000/stores/${storeId}`);
    deleteStores(res.data)
  };

  useEffect(() => {
    getStores();
    return () => {}
  }, [])

  useEffect(() => {
    if(id) getStore()
    return () => {}
  }, [id])
  
  return selectedStore ? (
    <div>

        <div className='imagetitle'>  
        <h1>{selectedStore.name}</h1>
        <img src={selectedStore.photo_url} />
        </div>   
  

      <section className="store-info">
        <div className= 'pcontainer'>
        <p className='p1'>{selectedStore.address}</p>
        <p className='p2'>{selectedStore.type}</p>
        <p className='p4'>{selectedStore.description}</p>
     
        </div>
      </section>
   
        
      )
    </div>
  ) : null;
}