import httpClient from "../http-common";

const makeRequest=data=>{
    return httpClient.post("/DepartmentMember/1/requests",data);
}
export default {makeRequest};