import React, { useState } from 'react'
// import todo from "../Images/todo.png";
// import todo1 from "../Images/todo1.jpg";
import todo from "../Images/todo.png";
// import "../App.css"
const Todo = () => {
  const [inputData,setInputData] = useState("");
  const [items,setItems] = useState([]);
  const [toggleSubmit,setToogleSubmit] = useState(true);
  const [isEditItem,setIsEditItem] = useState(null);
  const addItem = () => {
    if(!inputData){
    }
    else if(inputData && !toggleSubmit){
      setItems(
        items.map((elem) => {
          if(elem.id === isEditItem){
            return {...elem , name:inputData}
          }
          return elem;
        })
      )
      setToogleSubmit(true);
      setInputData('');
      setIsEditItem(null);
    }
    else{
      const allInputData =  {id: new Date().getTime().toString(), name:inputData}
      setItems([...items , allInputData]);
      setInputData("");
    }
  }
  const deleteItem = (index) => {
    const updatedItems = items.filter((elem)=>{
      return index !== elem.id;
    })

    setItems(updatedItems);
  }
  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id
    })
    setToogleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
  }
  const removeAll = () => {
    setItems([]);
  }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
            <figure>
                <img src={todo} alt="todologo" />
                <figcaption>Add Your List Here ✌</figcaption>
            </figure>

            <div className="addItems">
                <input type="text" placeholder='✍ Add Items ... ' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                {
                  toggleSubmit ? <i className="fa fa-plus add-btn" title='Add Item' onClick={addItem}></i> :
                  <i className="far fa-edit add-btn" title='Update Item' onClick={addItem}></i>
                }
            </div>
            <div className="showItems"> 
              {
                items.map((elem) => {
                  return (
                    <div className="eachItem" key={elem.id}>
                      <h3>{ elem.name }</h3>
                      <div className="todo-btn">
                        <i class="far fa-edit add-btn" title="Edit Item" onClick={() => editItem(elem.id)}></i>
                        <i class="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(elem.id)}></i></div>
                    </div>
                  )
                })
              }
            </div>

            <div className="showItems">
              <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}><span>CHECK LIST</span></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todo
