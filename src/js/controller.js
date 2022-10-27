const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const url = 'https://forkify-api.herokuapp.com/api/v2/recipes/'
const apiKey= 'faac783c-281e-4d50-965d-26b932baefa3'


const getRecipe = async (id) => {

  try{
 
    fetch(`${url}5ed6604591c37cdc054bcd09?key=${apiKey}`, 
    {
      method: 'GET',
      redirect: 'follow'
    })
    .then(response => response.json())
    .then(result => {
      
      console.log(result)

      


    })
    .catch(error => console.log('error', error));

  }catch (err){
    alert(err)
  }

}

getRecipe();