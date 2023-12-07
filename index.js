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
    if (matchingScoreValue>50){
      document.getElementById("matching-score").innerHTML = "Matching score is " + matchingScoreValue + "its high"
    }
    const percentageValue = json.thePercentageOfFallInLove
    document.getElementById("matching-score").innerHTML = "Matching score is " + matchingScoreValue
    document.getElementById("percent-score").innerHTML = "Compatibility is " +percentageValue +"%"
  }
  catch(error) {
    console.error(error)
  }
}