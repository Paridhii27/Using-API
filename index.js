const baseUrl = "https://jessie-test.onrender.com/"

let inputName = document.getElementById("submit-button");

inputName.addEventListener("click", submitForm);

function submitForm () {
  let name1 = document.getElementById("First-Name").value;
  let name2 = document.getElementById("Second-Name").value;
  console.log(name1,name2)
  getScore(name1,name2)
}

const getScore = async function(name1,name2) {
  try {
    console.log("trying")
    const response = await fetch (`${baseUrl}Letter/:${name1}${name2}/`)
    const json = await response.json(); 
    console.log(json)

    console.log(`Matching score is: ${json.matchingScore}`)
    const matchingScoreValue = json.matchingScore
    document.getElementById("matching-score").innerHTML = "Matching score is " + matchingScoreValue

    const percentageValue = json.thePercentageOfFallInLove

    if (percentageValue>50 || percentageValue<=75){
      document.getElementById("percent-score").innerHTML = "Compatibility is " +percentageValue +"%"
      document.getElementById("compatibility-message").innerHTML = "No one gets you like they do"
    }
    else if (percentageValue>75 || percentageValue<=100){
      document.getElementById("percent-score").innerHTML = "Compatibility is b " +percentageValue +"%"
      document.getElementById("compatibility-message").innerHTML = "You're falling in love"
    }
    else{
      document.getElementById("percent-score").innerHTML = "Compatibility is c " +percentageValue +"%"
      document.getElementById("compatibility-message").innerHTML = "It's better to just stay friends."
    }

    // document.getElementById("matching-score").innerHTML = "Matching score is " + matchingScoreValue
    // document.getElementById("percent-score").innerHTML = "Compatibility is " +percentageValue +"%"
  }
  catch(error) {
    console.error(error)
  }
}