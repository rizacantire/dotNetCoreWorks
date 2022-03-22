import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { denied, successed } from "../../../redux/helpers/messageHelper";
import { getUserBooksAsync } from "../../../redux/reducers/userBookSlice";
import { getUsersAsync, userList } from "../../../redux/reducers/userSlice";

export default function UserBooksForAdmin() {
  const dispatch = useDispatch();
  const getList = useSelector(userList);
  console.log(getList);
  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  return (
    <div className="site-card-wrapper">
      <Row gutter={20}>
        {getList.map(
          (user) =>
            user.roles[0] !== "Admin" && (
              <Col key={user.id} style={{ marginBottom: "2em" }} span={8}>
                <Card
                  title={user.firstName + " " + user.lastName}
                  bordered={false}
                  style={{ width: 200 }}
                  extra={<a href="#">Detay</a>}
                >
                  Kitap Sayısı : {user.books.length}
                  <br />
                  Okunan : {user.books.filter((b) => b.isRead === true).length}
                  <br />
                  Role : {user.roles[0]}
                </Card>
              </Col>
            )
        )}
      </Row>
    </div>
  );
}
