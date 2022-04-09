const url = 'https://us-central1-my-bartender-4c41e.cloudfunctions.net/getDrinks';
const test_url = 'http://localhost:5001/my-bartender-4c41e/us-central1/getDrinks';

export function getDrinks(params, callback) {
    const dest =  `${test_url}?${params}`;
    console.log(dest);
    return fetch(dest)
            .then((response) => (response.json()))
            .then((j) => parse_drinks(j))
            .then((o) => callback(o));
}


const parse_drinks = (drinks) => {
    if(drinks == null){
        return [];
    }
    return drinks.map((d) => {
        return {
            id: d.idDrink,
            name: d.strDrink,
            alcoholic: d.strAlcoholic,
            type: d.strCategory,
            iba: d.strIBA,
            instructions: d.strInstructions,
            imageLink: d.strDrinkThumb,
            ingredients: get_ingredients(d)
        }
    })
}

const get_ingredients = (d) => {
    let ingredients = [];
    for(const n of Array(15).keys()){
        const key = `strIngredient${n+1}`;
        const mea = `strMeasure${n+1}`;
        if(d[key] != null && d[key].length > 0){
            ingredients.push({
                name: d[key],
                measure: d[mea]
            })
        }
    }
    return ingredients;
}

