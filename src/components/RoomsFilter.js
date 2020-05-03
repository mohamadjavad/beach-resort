import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
  };

  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      {/* select type */}
      <form action='' className='filter-form'>
        <div className='form-group'>
          <label htmlFor='type'>room type</label>
          <select
            name='type'
            id='type'
            value={type}
            className='form-control'
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type  */}

        {/* guest */}
        <div className='form-group'>
          <label htmlFor='capacity'>guests</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            className='form-control'
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end of guest */}
        {/* room price */}
        <div className='form-group'>
          <label htmlFor='price'>room price ${price}</label>
          <input
            type='range'
            name='price'
            id='price'
            value={price}
            className='form-control'
            onChange={handleChange}
            min={minPrice}
            max={maxPrice}
          />
        </div>
        {/* end room price */}
        {/* size */}
        <div className='form-group'>
          <label htmlFor='size'>room size </label>
          <input
            type='number'
            name='minSize'
            id='size'
            value={minSize}
            className='size-input'
            onChange={handleChange}
          />
          <input
            type='number'
            name='maxSize'
            id='size'
            value={maxSize}
            className='size-input'
            onChange={handleChange}
          />
        </div>
        {/* end of size */}
        {/* exxtras */}
        <div className='single-extra'>
          <input
            type='checkbox'
            name='breakfast'
            id='breakfast'
            checked={breakfast}
            onChange={handleChange}
          />
          <label htmlFor='breakfast'>breakfast</label>

          <div className='single-extra'>
            <input
              type='checkbox'
              name='pets'
              id='pets'
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor='pets'>pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
};

export default RoomsFilter;