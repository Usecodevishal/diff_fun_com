import React, { useState } from "react";

const ListSwap = () => {
  const [list1, setList1] = useState([
    { name: "task-a", status: false },
    { name: "task-b", status: false },
    { name: "task-c", status: false },
  ]);

  const [list2, setList2] = useState([
    { name: "task-1" },
    { name: "task-2" },
    { name: "task-3" },
  ]);

  const handleCheck = (ind) => {
    let updatedList1 = [...list1];
    console.log(updatedList1[ind].status);
    updatedList1[ind].status = !updatedList1[ind].status;
    setList1(updatedList1);
  };

  const handleSwap = () => {
    //console.log("button clicked");
        let l1 = [...list1];
        let l2 = [...list2];

    list1.forEach((item,ind) => {
        
        if(item.status == true){
            let temp = l1[ind].name;
            l1[ind].name = l2[ind].name;
            l2[ind].name = temp;
            l1[ind].status = false;
        }
    })

    setList1(l1);
    setList2(l2);
    
  }
  return (
    <div>
      {/* Maping list1 first */}
      <ul>
        {" "}
        <h2>List-1 </h2>
        {list1.map((item, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={item.status}
              onChange={() => handleCheck(i)}
            />
            {item.name}
          </li>
        ))}
      </ul>

      {/* maping list2  */}

      <ul>
        <h2>List-2</h2>
        {list2.map((list, i) => (
          <li key={i}>{list.name}</li>
        ))}
      </ul>

      {/* button swaping */}
      <button onClick={handleSwap}>Swap  selected list items</button>
    </div>
  );
};

export default ListSwap;
