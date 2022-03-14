import React from "react";

export default function SideNavi() {
  const [activeItem, setValue] = React.useState("");
 
  const handleItemClick = (e, { name }) => {
    setValue({ activeItem: name })
    console.log(activeItem);
  }
  React.useEffect(() => {
       
  }, [activeItem])
  

  return (
    <div>
      side bar
    </div>
  );
}
