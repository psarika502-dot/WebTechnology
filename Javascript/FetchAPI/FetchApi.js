let cars = "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json";
console.log(cars);

function fetchData(){
  let data = fetch(cars)
  console.log(data);
  data.then(() =>{
    console.log("Data is coming")
  })
  data.catch(() => {
    console.log(error)
  })
}
fetchData()

// async function getData(){
//   let carData = await fetch(cars)
//   console.log(carData)

//   let result = await carData.json()
//   console.log(result)
// }
// getData()


async function getData(){
  let carData = await fetch(cars)
  console.log(carData)

  let result = await carData.json()
  console.log(result)
  let carNames = document.getElementById("cars")

  result.Results.forEach((ele) => {
    console.log(ele)

    carNames.innerHTML += `<ol>${ele.Mfr_CommonName}</ol>`
  });
}
getData()