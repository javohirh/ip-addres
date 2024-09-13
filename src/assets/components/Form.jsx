import { useState } from "react";

function Form({ handleSubmit, inputValue, setInputValue }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto  w-80 flex align-center mt-4"
    >
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        className="m-auto py-2 w-80 ps-4 bg-white  rounded-l-lg outline-none "
      />
      <button
        type="submit"
        className="bg-veryDarkGray py-[5px] px-4 rounded-r-lg text-2xl hover:bg-darkGray outline-none active:outline-none"
      >
        &gt;
      </button>
    </form>
  );
}

export default Form;
