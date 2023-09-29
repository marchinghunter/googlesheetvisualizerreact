import React from "react";

const Form = ({submitHandler,newData,changeHandler}) => {
  return (
    <>
      <form onSubmit={submitHandler}>
        <span className="inputfield">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            name="id"
            value={newData.id}
            onChange={changeHandler}
          />
        </span>
        <span className="inputfield">
          <label htmlFor="avatarname">Avatar Name</label>
          <input
            type="text"
            name="avatarname"
            value={newData.avatarname}
            onChange={changeHandler}
          />
        </span>
        <span className="inputfield">
          <label htmlFor="performancescore">Performance Score</label>
          <input
            type="text"
            name="performancescore"
            value={newData.performancescore}
            onChange={changeHandler}
          />
        </span>
        <button type="submit" className="addbtn">
          Add Row
        </button>
      </form>
    </>
  );
};

export default Form;
