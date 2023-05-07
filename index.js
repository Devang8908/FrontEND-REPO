import axios from "axios";


const baseURL = "http://localhost:8082/";

export const getAllProducts = async () => {
  try {    
    const res = await axios.get(`${baseURL}amazon/products/getAllProducts`);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getUserCart = async (user) => {
  try { 
    const res = await axios.get(`http://localhost:8081/amazon/addToCart/show/${user}`);
    return res.data.list;
  } catch (error) {
    return null;
  }
};


export const getCategories = async (category) => {
  try { 
    const res = await axios.get(`http://localhost:8082/getCategory/cat/${category}`);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getUserName = async (user) => {
  try { 
    const res = await axios.get(`http://localhost:8083/amazon/users/getuserdetails/${user}`);
    return res.data;
  } catch (error) {
    return null;
  }
};


export const getAllOrders = async (user) => {
  try { 
    const res = await axios.get(`http://localhost:8084/amazon/order/orderlist/${user}`);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const deleteFromBasket = async (userID,productId) => {


  let payload = {
    "userId": userID,
    "productId":productId
}

const requestOptions ={
    method: "DELETE",
    headers: { 'Content-Type': 'application/json' },
    body : JSON.stringify(payload),
}

fetch("http://localhost:8081/amazon/addToCart/remove",requestOptions)
.then(response => response.json())
.then(data => {
    //localStorage.setItem("users",JSON.stringify(user?.uid));
    //window.location.reload();
})
.catch(err =>{
  console.log(err)
})


}

export const handleQuantity = async (quantity,userID,productId) => {


  let payload = {
    "userId": userID,
    "productId":productId,
    "quntity":quantity
}

const requestOptions ={
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body : JSON.stringify(payload),
}

fetch("http://localhost:8081/amazon/addToCart/update",requestOptions)
.then(response => response.json())
.then(data => { 
    
    //localStorage.setItem("users",JSON.stringify(user?.uid));
    //window.location.reload();
})
.catch(err =>{
  console.log(err)
})


}


  // const res = await axios.delete('http://localhost:8081/amazon/addToCart/remove', { data: {userId: userID ,
  //       productID : productId  } });
  //       console.log("delete kar diya!!");
  // try {
  //   const res = await axios({
  //     url: 'http://localhost:8081/amazon/addToCart/remove',
  //     method: 'delete',
  //     data: { userId: userID ,
  //       productID : productId
  //     }
  //   });
  //   console.log("delete kar diya!!");
  // } catch (error) {
  //   console.log("eroor hai chutiye")
  // }




