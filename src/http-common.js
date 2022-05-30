import axios from "axios"

export default axios.create({
 baseURL:"https://alexsci-warehouse.herokuapp.com/",
 headers:{
     "Content-type":"application/json"
}
})