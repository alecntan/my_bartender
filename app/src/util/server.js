import { collection, addDoc, setDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../config.js';

const url = 'https://us-central1-my-bartender-4c41e.cloudfunctions.net/getDrinks';
const test_url = 'http://localhost:5001/my-bartender-4c41e/us-central1/getDrinks';

export function getDrinks(params, callback) {
    const dest =  `${test_url}?${params}`;
    console.log(dest);
    return fetch(dest)
            .then((response) => (response.json()))
            .then((j) => parse_drinks(j))
            .then((o) => { 
                callback(o); 
                return o;
            })
            .then((o) => { store_drinks(o); });
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

const store_drinks = (drinks) => {
    drinks.forEach(store_drink);
}

const store_drink = (drink_obj) => {
    try {
        setDoc(doc(db, 'drinks', drink_obj.id), drink_obj);
    } catch (e) {
        console.error('Error  adding document: ', e);
    }
}

export const get_drink = async (drink_id) => {

    const docRef = doc(db, 'drinks', drink_id.drinkId);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) {
        return docSnap.data();
    } else {
        return null;
    }
}

export const get_drink_by_id =(id, callback) => {
    get_drink(id)
        .then((d) => callback(d));
}
