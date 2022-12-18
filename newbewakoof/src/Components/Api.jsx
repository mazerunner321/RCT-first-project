import React from 'react'

const Api = () => {
    const [data,setData]= React.useState([]);

    React.useEffect(()=>{
        fetch(`https://parsehub.com/api/v2/projects/tm-avx2Q3-gj/last_ready_run/data?api_key=toAOoVTderwx&format=json`)
        .then((res)=>res.json())
        .then((data)=>setData(data))
        .catch((err)=>console.log(err))
    },[])

  return (
    <div>
        {console.log(data)};
    </div>
  )
}

export default Api