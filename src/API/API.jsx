import { useState, useEffect } from "react";


// function Api() {

//   const [show,setShow]=useState([])

//   let getAllUsers=async function(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data=await response.json();
//     setShow(data)
//   }

//   getAllUsers()
//   return (
//     <>
//       <h1 style={{textAlign:"center"}}>Api show</h1>
//       {
//         show.map((item)=>{
//           return <h4>{item.title}</h4>
//         })
//       }
//     </>
//   );
// }



// function Api() {

//     const [show, setShow] = useState([])

//     useEffect(() => {
//         let getAllUsers = async function () {
//             let response = await fetch("https://jsonplaceholder.typicode.com/posts")
//             let data = await response.json();
//             setShow(data)
//         }

//         getAllUsers()
//     })
//     return (
//         <>
//             <h1 style={{ textAlign: "center" }}>Api show</h1>
//             {
//                 show.map((item) => {
//                     return <h4>{item.title}</h4>
//                 })
//             }
//         </>
//     );
// }

// export default Api;


const Api = () => {

    const [show,setShow]=useState([])
  
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      if(data){
        let result=data.map((item)=>{
          return item.url
        })
        setShow(result)
      }
    })
    .catch((error)=>{
      setShow(error)
    })
  
    return (
      <>
        {
          show.map((value)=>{
            return <img src={value} key={value.id}/>
          })
        }
      </>
    )
  }
  
  export default Api