
const url = "https://striveschool.herokuapp.com/api/product";
const username = "user21";
const password = "2ruxa4MRJdUgg6cz";
window.onload = async () => {
  let response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Basic " + btoa(username + ":" + password)
    }
  });
  console.log(response);
}
