import axios from "axios";

const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
const response2 = await axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
console.log(response.data)
console.log(response2.data)