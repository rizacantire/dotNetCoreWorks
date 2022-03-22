import React, { useEffect, useState } from "react";
import { Card, Col, Row } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { denied, successed } from "../../../redux/helpers/messageHelper";
import { getUserBooksAsync } from "../../../redux/reducers/userBookSlice";
import { getUsersAsync, userList } from "../../../redux/reducers/userSlice";

export default function UserBooksForAdmin() {
    const dispatch = useDispatch()
    const getList = useSelector(userList)
    console.log(getList);
    useEffect(() => {
        dispatch(getUsersAsync)
    }, [dispatch])
    
  return (
    <div className="site-card-wrapper">
    <Row gutter={20}>
        {getList.map((user)=>(
            <Col style={{marginBottom:"2em"}} span={8}>
        <Card key={user.id} title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
        ))}
      
    </Row>
    
    </div>
  )
}
