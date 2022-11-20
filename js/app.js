let Movies=["ROLLING CODE MOVIE","ALVIN Y LAS ARDILLAS 720P","UN SHOW MAS: LA PELÍCULA","RESIDENT EVIL"]


//add movie to list
const addMovie=(movie=prompt('Ingresa la película que quieres agregar'))=>{
    if(movie){
        while(movie){
            movie=movie.toUpperCase()
            Movies.push(movie)
            movie=prompt('Ingresa la película que quieres agregar')
        }
        return alert(`Películas agregadas correctamente!`)
    }else{
        return alert(`Operacion finalizada ⚠`)
    }
}

//show movies list
const showMovies=()=>{
    document.body.innerHTML=""
    document.write('<h1>Películas en la lista</h1>')
    let orderMovies=Movies.slice(0)
    orderMovies=orderMovies.sort()
    document.write("<ul>")
    orderMovies.forEach((movie)=>document.write(`<li>${movie}</li>`))
    document.write('</ul>')
}

//show movies that contains the specified term
const filterMovies=(term=prompt('Escribe el término para filtrar'))=>{
    term=term.toUpperCase()
    if(term){
        let filter=Movies.filter((movie)=>movie.includes(term))
        return alert(`Películas encontradas: ${filter.join(", ")}`)
    }else{
        return alert('Operacion finalizada ⚠')
    }
}

//delete a movie
const deleteMovie=(movie=prompt('Ingresa la película que quieres eliminar'))=>{
    // let index=Movies.findIndex((Movie)=>Movie.includes(movie))
    movie=movie.toUpperCase()
    let index=Movies.indexOf(movie)
    if(index>=0){
        let deleteConfirm=confirm(`Seguro que quieres eliminar ${Movies[index]}?`)
        if(deleteConfirm){
            console.warn (`${Movies[index]} eliminado correctamente`)
            Movies.splice(index,1)
            return 'Operacion finalizada'
        }else{return `Operacion cancelada`}
    }else{
        alert(`La película "${movie}" no existe o no se encuentra en la lista de películas`)
        return 'Película no encontrada'
    }
}

//modify a movie
const changeMovie=(movie=prompt(`Ingresa la película que quieres modificar`))=>{
    movie=movie.toUpperCase()
    let index=Movies.indexOf(movie)
    if(index>=0){
        let changeConfirm=confirm(`Seguro que quieres modificar ${Movies[index]}?`)
        if(changeConfirm){
            Movies.splice(index,1,prompt('Ingresa el nombre de la nueva película').toUpperCase())
            alert(`Película modificada correctamente`)
            return 'Operacion finalizada'
        }else{return `Operacion cancelada`}
    }else{
        alert(`La película "${movie}" no existe o no se encuentra en la lista de películas`)
        return 'Película no encontrada'
    }
}


// html buttons
document.getElementById("add").onclick=function(){
    addMovie()
}

document.getElementById("show").onclick=function(){
    showMovies()
}

document.getElementById("filter").onclick=function(){
    filterMovies()
}

document.getElementById("delete").onclick=function(){
    deleteMovie()
}

document.getElementById("change").onclick=function(){
    changeMovie()
}