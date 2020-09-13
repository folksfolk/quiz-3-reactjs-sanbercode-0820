import React, {useState, useEffect} from 'react' 
import axios from 'axios';
import "./public/css/TableAPI.css"

const MovieIndex = () => {
    const [dataFilm, setdataFilm] = useState(null)
    const [input, setInput] = useState({
        title: "", 
        description: "", 
        year: 0,
        duration: 0,
        genre: "",
        rating: 0,
        image: "", 
        id: null})

    useEffect(() => {
        if (dataFilm === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/movies`)
            .then(res => {
                setdataFilm(res.data.map(el=>{ 
                    return {
                        id: el.id, 
                        title: el.title, 
                        description: el.description, 
                        year: el.year,
                        duration: el.duration,
                        genre: el.genre,
                        rating: el.rating,
                        image: el.image
                    }}))
            })
        }
    }, [dataFilm]);

    const deleteFilm = (event) => {
        let idFilm = parseInt(event.target.value)

        let newDataFilm = dataFilm.filter(el => el.id !== idFilm)

        axios.delete(`http://backendexample.sanbercloud.com/api/movies/${idFilm}`)
        .then(res => {
            console.log(res)
        })

        setdataFilm([...newDataFilm])
    }

    const editForm = (event) => {
        let idFilm = parseInt(event.target.value)
        let film = dataFilm.find(x => x.id === idFilm)
        setInput({
            title: film.title, 
            description: film.description, 
            year: film.year, 
            duration: film.duration,
            genre: film.genre,
            rating: film.rating,
            image: film.image,
            id: idFilm})
    }

    const handleChange = (event) => {
        let typeOfInput = event.target.name

        switch(typeOfInput) {
            case "title":{
                setInput({...input, title: event.target.value});
                break
              }
              case "description":{
                setInput({...input, description: event.target.value});
                break
              }
              case "year":{
                setInput({...input, year: event.target.value});
                break
              }
              case "duration":{
                setInput({...input, duration: event.target.value});
                break
              }
              case "genre":{
                setInput({...input, genre: event.target.value});
                break
              }
              case "rating":{
                setInput({...input, rating: event.target.value});
                break
              }
              case "image":{
                setInput({...input, image: event.target.value});
                break
              }
              default: {break;}
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let title = input.title
        let description = input.description
        let genre = input.genre
        let image = input.image

        if(input.id === null) {
            axios.post(`http://backendexample.sanbercloud.com/api/movies`, {
                title, 
                description, 
                year:input.year, 
                duration:input.duration, 
                genre, 
                rating:input.rating,
                image
            })
            .then(res => {
                setdataFilm([...dataFilm, {
                    id: res.data.id,
                    title, 
                    description, 
                    year:input.year, 
                    duration:input.duration, 
                    genre, 
                    rating:input.rating,
                    image
                }])
            })
        } else {
            axios.put(`http://backendexample.sanbercloud.com/api/movies/${input.id}`, {
                title, 
                description, 
                year:input.year, 
                duration:input.duration, 
                genre, 
                rating:input.rating,
                image
            })
            .then(() => {
                let data = dataFilm.find(el => el.id === input.id)
                data.title = title 
                data.description = description 
                data.year = input.year 
                data.duration = input.duration 
                data.genre = genre 
                data.rating = input.rating
                data.image = image
                setdataFilm([...dataFilm])
            })
        }

        setInput({
            title: "", 
            description: "", 
            year: 0,
            duration: 0,
            genre: "",
            rating: 0, 
            image: "",
            id: null
        })
    }

    return(
        <>
            <div style={{width: "70vw", margin: "0 auto"}}>
                <h1 style={{textAlign: "center"}}>Daftar Film</h1>
                <table cellspacing="4" cellpadding="4">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Year</th>
                            <th>Duration</th>
                            <th>Genre</th>
                            <th>Rating</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataFilm !== null && dataFilm.map((item, index) => {
                                return(
                                    <tr key={item.id}>
                                        <td>{index+1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.year}</td>
                                        <td>{item.duration}</td>
                                        <td>{item.genre}</td>
                                        <td>{item.rating}</td>
                                        <td>{item.image}</td>
                                        <td>
                                            <button value={item.id} style={{marginRight: "5px"}} onClick={editForm}>Edit</button>
                                            <button value={item.id} onClick={deleteFilm}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <br/>
                <br/>
                <h1>Form Daftar Film</h1>
                <div style={{width: "50%", margin: "0 auto", display: "block"}}>
                    <div style={{border: "1px solid #aaa", padding: "20px"}}>
                    <form style={{textAlign: "center"}} onSubmit={handleSubmit}>
                        <strong style={{marginRight: "10px"}}>Title</strong>
                        <input required name="title" type="text" value={input.title} onChange={handleChange}/>
                        <br/>
                        <strong style={{marginRight: "10px"}}>Description</strong>
                        <input required name="description" type="textArea" value={input.description} onChange={handleChange}/>
                        <br/>
                        <strong style={{marginRight: "10px"}}>Year</strong>
                        <input required name="year" type="text" value={input.year} onChange={handleChange}/>
                        <br/>
                        <strong style={{marginRight: "10px"}}>Duration</strong>
                        <input required name="duration" type="text" value={input.duration} onChange={handleChange}/>
                        <br/>
                        <strong style={{marginRight: "10px"}}>Genre</strong>
                        <input required name="genre" type="text" value={input.genre} onChange={handleChange}/>
                        <br/>
                        <strong style={{marginRight: "10px"}}>Rating</strong>
                        <input required name="rating" type="text" value={input.rating} onChange={handleChange}/>
                        <br/>
                        <strong style={{marginRight: "10px"}}>Image</strong>
                        <input required name="image" type="text" value={input.image} onChange={handleChange}/>
                        <br/>
                        <button>Save</button>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieIndex