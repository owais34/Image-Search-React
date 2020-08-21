import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios'
import { Button } from '@material-ui/core';
import ImageResults from '../image-results/ImageResults';


function Search() {
    const [state, setstate] = useState({searchText:'',
    amount:15,
    apiUrl:'https://pixabay.com/api',
    apiKey:'17972173-37f0b4b0df2f178bd635c4a2d',
    images:[]
})

// useEffect(() => {
//     //effect
//     if(state.searchText.length!==0)
//     {axios.get(`${state.apiUrl}/?key=${state.apiKey}&q=${state.searchText}&image_type=photo&
//     per_page=${state.amount}&safesearch=true`)
//     .then(res=>setstate({...state,images:res.data.hits}))
//     .catch(err=>console.log(err))}
    
// }, [state])
const onTextChange =(e)=>{
    setstate({...state,searchText:e.target.value})
}
const onAmountChange=(e)=>{
    setstate({...state,amount:e.target.value})

}
const onClick=()=>{
    if(state.searchText.length!==0)
    {axios.get(`${state.apiUrl}/?key=${state.apiKey}&q=${state.searchText}&image_type=photo&per_page=${state.amount}&safesearch=true`)
    .then(res=>setstate({...state,images:res.data.hits}))
    .catch(err=>console.log(err))}
}
    return (
        <div>
            <TextField
            name="searchText"
            value={state.searchText}
            onChange={onTextChange}
            label="Search for images"
            fullWidth={true}
            style={{margin:10}}
            />
            <br/><br/>
            <Select
            name="amount"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state.amount}
            onChange={onAmountChange}
            style={{margin:10}}
            >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
        <br/><br/>
        <Button onClick={onClick} style={{backgroundColor:'lightblue'}}>Search</Button>
        <br/><br/>
        {(state.images.length>0)?(<ImageResults images={state.images}/>): null}
        </div>
    )
}

export default Search