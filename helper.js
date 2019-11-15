
/* const url = "https://striveschool.herokuapp.com/api/product";
const username = "user21";
const password = "2ruxa4MRJdUgg6cz";
let jsonResp;
window.onload = async () => {
  let response = await fetch(url, {
    headers: {
      Authorization: "Basic " + btoa(username + ":" + password)
    }
  })
  jsonResp = await response.json();
  console.log(jsonResp);
}
/*getEvent = async id => {
  const response = await fetch(url + id); //this is getting the response from the API fetching the event
  return await response.json(); //this is transforming the response in a json
}; 
creatProduct = async (product) => {
  let response = await fetch(url, {
    //the POST is made with the fetch method as well
    method: "POST", //declaring the CRUD method
    body: JSON.stringify(product), //Here i'm stringifying the object
    headers: {

      "Content-Type": "application/json",
      "Authorization": "Basic " + btoa(username + ":" + password)
      //this is required by our APIS, we need to declare the content type
    }
  })
  let jsonResp = await response.json();

document.querySelector("#product").innerHTML = jsonResp.map(product => `
<div class="row md-3">
<img src="${product.imageUrl}" style="width=100%"/>
<p>${product.name}</p>`.join("")
  );
}     */

const url = "https://strive-school-testing-apis.herokuapp.com/api/product/";
const username = "user21";
const password = "2ruxa4MRJdUgg6cz";
let authHeaders = () => {
  return {
    "Content-Type": "application/json",
    "Authorization": "Basic " + btoa(username + ":" + password)
  };
};
let createProduct = async product => {
  const response = await fetch(url, {
    //the POST is made with the fetch method as well
    method: "POST", //declaring the CRUD method
    body: JSON.stringify(product), //Here i'm stringifying the object
    headers: authHeaders()
  });
  return response; //returning the response because the frontend need to check the ok property
}

let readProducts = async () => {
  const response = await fetch(url, {
    headers: authHeaders()
  }); //this is getting the response from the API fetching the events
  const data = await response.json();
  return data; //this is transforming the response in a json
};

let showProducts = async (data) => {
  const products = await readProducts();
  const eventsColumn = document.querySelector("#productColumns");
  if (products.length > 0) {
    eventsColumn.innerHTML = products.map(product => 
      `<div class="row">
          <li class="list-group-item">
          <div><img src="${product.imageUrl}"/><a href="backoffice.html?id=${product._id}">${product.brand} : ${product.name} - ${product.description}</a></div>
          </li>
        </div>`).join("");
  }else {
    eventsColumn.innerText = "No products are added!";
  }
}

let handleSubmit = async () => {
  event.preventDefault(); //preventing the default browser event handling
  const newProduct = {//gathering the data from the form, field by field
    name: document.querySelector("#item").value,
    description: document.querySelector("#description").value,
    brand: document.querySelector("#brand").value,
    price: document.querySelector("#price").value,
    // imageUrl: document.querySelector("#image").value

  };

  const response = await createProduct(newProduct); //saving in the response variable the result of the POST
  if (response.ok) {
    //checking the ok property which stores the successfull result of the operation
    alert("the item was added successfully");
  } else {
    alert("the item was NOT added successfully");
  }
}

showProducts();
