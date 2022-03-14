import React from "react";
import SideNavi from "./components/layouts/SideNavi";
import Dashboard from "./components/layouts/Dashboard";
import Header from "./components/layouts/Header";
import { DatePicker, message } from 'antd';


export default function App() {
  const [date, setDate] = React.useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  return (
    <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
    </div>
  );
}
