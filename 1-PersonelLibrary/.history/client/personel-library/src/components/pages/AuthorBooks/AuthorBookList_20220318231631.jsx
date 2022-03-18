import React from 'react'
import { Select } from 'antd';

export default function AuthorBookList() {
  const { Option } = Select;
  return (
    <div>
       <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
   
    filterOption={(input, option) =>
      option.children.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>
    </div>
  )
}
