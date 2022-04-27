const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop("Garfield");
}

function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}

function appendCat(){
    const newLastCats = [...cats, "Broom"];
    return newLastCats;
}

function prependCat(){
    const newFirstCat = ["Arnold", ...cats];
    return newFirstCat;
}

function removeFirstCat(){
    const byeFirstCat = cats.slice(1);
    return byeFirstCat;
}

function removeLastCat(){
    const byeLastCat = cats.slice(0,-1);
    return byeLastCat;
}