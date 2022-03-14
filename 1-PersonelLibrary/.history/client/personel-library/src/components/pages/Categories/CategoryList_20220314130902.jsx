import React , {useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addCatAsync, catList, getCatsAsync } from '../../../redux/reducers/catSlice';

export default function CategoryList() {
    const [name, setName] = useState("")
    const dispatch = useDispatch()
    const getData = useSelector(catList)
    console.log(getData);
    const handeSubmit = (e)=>{
        e.preventDefault();
        dispatch(addCatAsync(name))
    }

    useEffect(()=>{
      dispatch(getCatsAsync)
    },[dispatch])
  return (
    <div>
      <table>
        <tr>
          <th>1</th>
          <th>2</th>
        </tr>
        {getData.map((data)=>(
           <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            </tr>
          ))}
       
          
       
      </table>
        <form onSubmit={handeSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        </form>
    </div>
  )
}
