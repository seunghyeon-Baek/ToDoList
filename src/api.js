import "./App.css";
import React, { useState, useEffect } from "react";
import { Container, List, Paper } from "@mui/material";
import { call } from "./service/ApiService";

import Todo from "./Todo";
import AddTodo from "./AddTodo";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    call("/todo", "GET", null)
    .then((response) => setItems(response.data));
  }, []);

  const addItem = (item) => {
    call("/todo", "POST", item)
    .then((response) => setItems(response.data));
  };

  const editItem = (item) => {
    call("/todo", "PUT", item)
    .then((response) => setItems(response.data));
  };

  const deleteItem = (item) => {
    call("/todo", "DELETE", item)
    .then((response) => setItems(response.data));
  };

  let todoItems = items.length > 0 && ( // items의 개수
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo // todo 
            item={item}
            key={item.id}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ))}
      </List>
    </Paper>
  );
  return (
    <div className="App">
      <Container maxWidth="md">        
        <AddTodo addItem={addItem} /> {/* 입력창 */}
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
