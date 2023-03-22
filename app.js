const loadMeal=(searchData)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>loadData(data.meals))
}

const loadData=data=>{
  const container=document.getElementById('card-container')
  container.innerHTML=''
  console.log(container);
  data.forEach(meal=>{
     const mealDiv=document.createElement('div')
        mealDiv.classList.add('card')
       mealDiv.innerHTML=`
       <div class="card w-96 bg-blue-300 text-black shadow-2xl mt-10">
            <figure><img class="w-full" src="${meal.strMealThumb}" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">${meal.strMeal}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
       
        `
        container.appendChild(mealDiv)
  })
}

const searchData=search=>{
  const searchNow=document.getElementById('searchField').value;
    loadMeal(searchNow)
}

loadMeal('fish')