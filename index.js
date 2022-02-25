

const search = () => {
    const searchInputField = document.getElementById('search-input-field').value;

    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputField}`;
    if(searchInputField == ''){

    }else{

        fetch(url)
        .then(res => res.json())
        .then(data => showResult(data.meals))
    }
}


showResult = (data) => {
    const addResultDiv = document.getElementById('add-search-result');

    const foundSearchResult = document.getElementById('search-result');

    //  search reulte show
    // Before show it clear previous items 
    foundSearchResult.innerText = ``;
    // addResultDiv.innerHTML=''; // use kora thik na problem : memory lick 
    addResultDiv.textContent=''; // age ta theke better 


    if(data.length>0){

        foundSearchResult.innerText =   `${data.length} result is found`;
        
        // show result as a block items 
        for (const items of data) {
            const div = document.createElement('div');
            div.innerHTML = `
                            <div class="card text-center">
                                <img src="${items.strMealThumb}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${items.strMeal}</h5>
                                    <p class="card-text">${items.strInstructions.substr(0,100)}</p>
                                    <a href="#" class="btn btn-warning"> more details</a>
                                </div>
                            </div>
        `
        addResultDiv.appendChild(div);
        }
        const searchInputField = document.getElementById('search-input-field').value='';
    }else{
        foundSearchResult.innerText =   `No result is found`;
    }

    console.log(data);

    

}

const searchResultDiv = document.getElementById('add-search-result');