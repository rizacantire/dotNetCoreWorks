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
          <td>1</td>
          <td>2</td>
        </tr>
      </table>
        <form onSubmit={handeSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        </form>
    </div>
  )
}
