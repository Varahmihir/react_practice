import react,{useState,useEffect} from 'react';

const DynamicForm =()=>{

   const [certificates,setCertificates]=useState([]);

   const [isunChecked,setIsunChecked]=useState(true)
    let c=[];
   const addCertificate=()=>{
    const a=document.getElementById('certi').value
    setCertificates([...certificates,a]);
       c=[];

   }
   
   


   const handleCheck=(e)=>{

       setIsunChecked(!isunChecked);
       
       console.log(e.target.checked===true)
       if(e.target.checked===true){
        setCertificates([...certificates,""]);
        
       }else{
        setCertificates([]);
       }

   }

   const handleSubmit=()=>

   {

       setCertificates([""]);

   }

   return (

       <form onSubmit={handleSubmit}>
                            

                            <input type="text" placeholder='name' id='name' required/>

                            <input type='checkbox' onChange={(e)=>{handleCheck(e)}}/>i have certificates

        {!isunChecked && certificates.map((cert,index)=>(
            <div key={index}>
                <input key={index} type='text' id='certi' value={cert.value} />
                <br></br>
                </div>
                   ))}

                   <button type='button' onClick={addCertificate} disabled={isunChecked}>Add CERTIFICATE</button>

                   <button type='submit' onClick={handleSubmit}>SUBMIT</button>

               

           

       </form>

   )

}
export default DynamicForm;