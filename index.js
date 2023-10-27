
const frNames = ["Alice", "Bob", "Carol", "Adam"]
const frOccupations = ["Writer", "Teacher", "Programmer"]
const frStartingPrices = [30, 50, 70, 96, 68]

// Initial state
const freelancers = [{ name: "Alice", occupation: "Writer", startingPrice: 65},
{name: "Bob", occupation: "Teacher", startingPrice: 70}]
  

  const addFreelancerIntervalId = setInterval(addFreelancer, 2000);
  render(); 
  
  // Call the render() function once to render the initial state

  function addFreelancer(){
    let randIndex = Math.floor(Math.random() * frNames.length)
    const randFrName =  frNames[randIndex]

    randIndex = Math.floor(Math.random() * frOccupations.length)
    const randFrOccupation = frOccupations[randIndex]

    randIndex = Math.floor(Math.random() * frStartingPrices.length)
    const randFrStartingPrice = frStartingPrices[randIndex]
    
    freelancers.push({ 
        name: randFrName, 
        startingPrice: randFrStartingPrice, 
        occupation: randFrOccupation
    }); 
    render();
    if(freelancers.length >= 10)
    clearInterval(addFreelancerIntervalId);
  }

  function render(){
    //adding names to html page
    const names = document.querySelector("#name")
    const listingNames = freelancers.map(freelancer => {
        const element = document.createElement("li")
        element.innerHTML = freelancer.name;
        return element;
    });
    names.replaceChildren(...listingNames)

    // adding occupations to html page
    const occupations = document.querySelector('#occupation')
    const listingOccupations = freelancers.map(freelancer => {
        const element = document.createElement("li")
        element.innerHTML = freelancer.occupation;
        return element;
    });
    occupations.replaceChildren(...listingOccupations)

    //adding starting prices to html page
    const prices = document.querySelector('#startingPrice')
    const listingStartingPrices = freelancers.map(freelancer => {
        const element = document.createElement("li")
        element.innerHTML = freelancer.startingPrice;
        return element;
    });
    prices.replaceChildren(...listingStartingPrices)

   // calculate the average starting price
   const avgStartingPrice = document.querySelector('#avgStartingPrice')
   const avgStartingPriceValue = freelancers.reduce((accum, currVal) => 
   accum + currVal.startingPrice, 0) / (freelancers.length);
   avgStartingPrice.textContent = `The average starting price is $${avgStartingPriceValue.toFixed(2)}`;
  }
