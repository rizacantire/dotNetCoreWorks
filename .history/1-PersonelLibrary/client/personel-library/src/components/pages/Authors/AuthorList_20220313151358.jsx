import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { authorList, getAuthorsAsync } from '../../../redux/reducers/authorSlice';

export default function AuthorList() {
    const dispatch = useDispatch()
    const authorListData = useSelector(authorList)

    useEffect(() => {
        dispatch(getAuthorsAsync)
      
    }, [dispatch])
    

  return (
    <div>AuthorList</div>
  )
}
