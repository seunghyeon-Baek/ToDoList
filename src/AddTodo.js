import React, { useState } from "react";

import { Button, Grid, TextField } from "@mui/material";
import { TiDelete } from "react-icons/ti";

// 입력창
const AddTodo = (props) => {
  // 사용자의 입력을 저정할 오브젝트
  const [item, setItem] = useState({ title: "" });
  const addItem = props.addItem;  // addItem은 props로 보냄

  // onButtonClick 함수 작성
  const onButtonClick = () => {
    if (!item.title) {  // 입력 된 내용 없을 시 경고창
      alert('내용을 입력해주세요');
      return;
    }
    addItem(item); // addItem 함수 사용   // 데이터 보내고
    setItem({ title: "" }); // 보낸공간을 빈공간으로 변경
  };

  // onInputChange 함수 작성
  const onInputChange = (e) => {
    setItem({ title: e.target.value });
    console.log(item);
  };

  // enterKeyEventHandler 함수
  const enterKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
      onButtonClick();
    }
  };

  // 입력한 글이 없을 시 삭제
  const onClearButtonClick = () => {
    setItem({ title: "" });
  }
  // onInputChange 함수 TextField에 연결
  return (
    
    <Grid container style={{ marginTop: 20 }}>
  <Grid xs={10} md={10} item style={{ paddingRight: 16, position: 'relative' }}>
    <TextField
      placeholder="What do you need to do? "
      fullWidth
      onChange={onInputChange}
      onKeyPress={enterKeyEventHandler}
      value={item.title}
    />
    {item.title && (
      <Button
        style={{ position: 'absolute', top: '50%', right: '0', margin: '3px', transform: 'translateY(-50%)' }}
        color="secondary"
        onClick={onClearButtonClick}
      >
        <TiDelete style={{ fontSize: '24px', color: 'black' }} />
      </Button>
    )}
  </Grid>
  <Grid xs={2} md={2} item>
    <Button
      fullWidth
      style={{ height: '100%', backgroundColor: 'black', color: 'white' }}
      onClick={onButtonClick}
    >
      입력
    </Button>
  </Grid>
</Grid>

  
  );
}

export default AddTodo;