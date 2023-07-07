import React from "react";

const Form = (props) => (
  <form onSubmit={props.weatherMethod}>
    <input type="text" name="city" placeholder="Введите название города" />
    <button>Выбрать</button>
  </form>
);

export default Form;
