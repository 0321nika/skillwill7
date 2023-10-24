// //დავალება 1

// function mySetTimeout(delay) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve()
//       }, delay)
//     });
//   }
  
//   function makeToy() {
//     const toyMakingTime = 3000; // 3 seconds
//     return mySetTimeout(toyMakingTime).then(() => {
//       return "სათამაშო მზადაა!"
//     })
//   }
  
//   function deliverToys(delay) {
//     return mySetTimeout(delay).then(() => {
//       return "Toys delivered!"
//     })
//   }
  
//   function sellToy(delay) {
//     return mySetTimeout(delay).then(() => {
//       return "სათამაშო გაყიდულია!"
//     })
//   }
  
//   makeToy()
//     .then((toyResult) => {
//       console.log(toyResult)
//       return deliverToys(2000)
//     })
//     .then((deliveryResult) => {
//       console.log(deliveryResult)
//       return sellToy(1000)
//     })
//     .then((sellingResult) => {
//       console.log(sellingResult)
//     })
//     .catch((error) => {
//       console.error("Error: ", error)
//     });



//დავალება2

function mySetTimeout(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }
  
  async function makeToy() {
    const toyMakingTime = 3000
    await mySetTimeout(toyMakingTime)
    return "სათამაშო მზადაა!"
  }
  
  async function deliverToys(delay) {
    await mySetTimeout(delay)
    return "Toys delivered!"
  }

  async function sellToy(delay) {
    await mySetTimeout(delay)
    return "სათამაშო გაყიდულია!"
  }
  
  async function performToyShopOperations() {
    try {
      const toyResult = await makeToy()
      console.log(toyResult)
  
      const deliveryResult = await deliverToys(2000)
      console.log(deliveryResult)
  
      const sellingResult = await sellToy(1000)
      console.log(sellingResult)
    } catch (error) {
      console.error("Error: ", error)
    }
  }
  
  performToyShopOperations();