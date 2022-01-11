import axios from "axios";

export function getDrinks(){
    return new Promise(function(resolve, reject){
        axios({
            url: `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
            method: "get",
        })
            .then((r)=>resolve(r))
            .catch((e)=>{
                console.log(e);
                reject(e);
            });
    });
}