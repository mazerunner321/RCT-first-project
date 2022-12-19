import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';


const Jackets = () => {
    const [prod, setProd]= React.useState([]);
    const [page,setPage]= React.useState(1);
    const [limit, setLimit]= React.useState(9);
    
    React.useEffect(()=>{
        fetch(`http://localhost:3000/Product?_page=${page}&_limit=${limit}`)
        .then((res)=>res.json())
        .then((res)=>setProd(res))
        .catch((err)=>console.log(err));
    },[page])

  return (
    <div>
        <Navbar />
        <h1 id='h'style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset', padding:'20px',marginTop:'2%'}}>JACKETS</h1>
        <div id='jacketsContainer'>
            {prod?.map((el)=>(
                <div id='jacketsDiv'>
                    <img src={el.img} alt=""/>
                    <h2>{el.name}</h2>
                    <h3>{el.price}</h3>
                    <p>{el.extra}</p>
                </div>
            ))}
        </div>
        <div id='buttons'>
            <button disabled={page === 1} onClick={()=>setPage(page-1)}> <span>-</span> </button>
            <h3>{page}</h3>
            <button disabled={page >= Math.ceil(50/limit)} onClick={()=>setPage(page+1)}> <span>+</span>
            </button>
        </div>
        <Footer/>
    </div>
  )
}

export default Jackets