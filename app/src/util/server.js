import { setDoc,
         doc,
         getDoc,
         deleteDoc,
         updateDoc, 
         arrayUnion,
         arrayRemove } from 'firebase/firestore';
import { db } from '../config.js';

const url = 'https://us-central1-my-bartender-4c41e.cloudfunctions.net/getDrinks';
const test_url = 'http://localhost:5001/my-bartender-4c41e/us-central1/getDrinks';

export function getDrinks(params, callback) {
    const dest =  `${url}?${params}`;
    return fetch(dest)
            .then((response) => (response.json()))
            .then((j) => parse_drinks(j))
            .then((o) => { 
                callback(o); 
                return o;
            })
            .then((o) => { store_drinks(o); })
            .catch((e) => {
                callback(-1);
            });
        
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


export const init_favourites = (user_id) => {
    try {
        setDoc(doc(db, 'users', user_id), {'favourites' : []});
    } catch (e) {
    }
}

export const set_favourite = (user_id, drink_obj) => {
    updateDoc(doc(db, 'users', user_id), {
        favourites: arrayUnion(drink_obj)
    })
}

export const del_favourite = (user_id, drink_obj) => {
    updateDoc(doc(db, 'users', user_id), {
        favourites: arrayRemove(drink_obj)
    });
}

export const delete_favourites = (user_id) => {
    deleteDoc(doc(db, 'users', user_id));
}

const check_favourites = async (user_id, drink_obj) => {
    const docRef = doc(db, 'users', user_id);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) {
        const favourites = docSnap.data().favourites;
        for(let i = 0; i < favourites.length; ++i) {
            if(favourites[i].id === drink_obj.id) {
                return true;
            }
        }
        return false;
    } else {
        return false;
    }
}

export const is_favourite = (user_id, drink_obj, callback) => {
    check_favourites(user_id, drink_obj)
        .then((res) => callback(res));
}

const user_favourites = async (user_id) => {
    const docSnap = await getDoc(doc(db, 'users', user_id));

    if(docSnap.exists()) {
        const favourites = docSnap.data().favourites;
        return favourites;
    }

    return [];
}

export const get_favourites = (user_id, callback) => {
    user_favourites(user_id).then((favourites) => callback(favourites));
}
