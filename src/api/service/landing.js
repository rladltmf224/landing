import api from "../api/defaultAPI";



export default {
/*   postCustomerInfo: (params) =>
    api.post("/api/customer", JSON.stringify(params)),
   */
 postCustomerInfo: (params) => {
    return api.post("/api/customer", params, {
      headers: { "Content-Type": "application/json" },
    });
  },


};
