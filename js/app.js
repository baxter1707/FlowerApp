let getAllFlowersURL = "https://flowers.vapor.cloud/flowers"
let postUserFlower = "https://flowers.vapor.cloud/flower"

let flowerList = $("#flower-list-container")


fetch(getAllFlowersURL)
  .then(function(response){
    return response.json()
    console.log(response.json)
  })
  .then(function(jsonData){
    $(jsonData).each(function(index,flower){
      $("<div>").addClass("flower-container")
      .append($("<h2>").html(flower.name))
      .append($("<img>").attr("src",flower.imageURL))
      .append($("<p>").html(flower.description))
      .appendTo($(flowerList))
    })
  })


$("#user-flower").click(function(){
  let inputFlower = $("#input-flower").val()
  let inputDescription =$("#input-flower-description").val()
  let inputImage =$("#image-for-flower").val()

let userData = JSON.stringify( {"name":inputFlower,"description":inputDescription,"imageURL":inputImage})
console.log(userData)

  fetch(postUserFlower,{
    method:"POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body: userData
  })

})















  // .then(function(jsonData){
  //   for (key in jsonData){
  //     console.log(jsonData[key])
  //   }
  //   })







  // .then(function(jsonData){
  //   for (key in jsonData){
  //     return jsonData[key]
  //     console.log(jsonData[key])
  //   }
  // })














  // $(jsonData).each(function(index,flower){
  // return flower.name
  // console.log(flower.name)
