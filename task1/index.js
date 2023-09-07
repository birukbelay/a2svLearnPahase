import axios from "axios";

// const response = await axios.get('https://jsonplaceholder.typicode.com/')
// const response2 = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
// console.log(response.data)
// console.log(response2.data)
const  postData= async ()=>{
    try{
    const postResp = await axios.post('https://jsonplaceholder.typicode.com/posts', {title:"some title", body:"some body", userId:1})
    console.log("--------------> ", postResp.data)
    }catch(e){
        console.log(e.message)
    }
    
}
postData()
// console.log(postResp)
// console.log(postResp.data.body)