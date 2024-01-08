import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import Select from 'react-select';
import { makes } from '../../helpers/searchForm';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [selectedLevels, setSelectedLevels] = useState([]);

  const handleSelectChange = selectedOptions => {
    setSelectedLevels(selectedOptions);

    const filters = {
      levels: selectedOptions.map(option => option.value),
    };

    dispatch(setFilter(filters));
  };

  return (
    <form>
      <div>
        <label>
          <p>Level of knowledge</p>
          <Select
            name="levels"
            placeholder="Enter the text"
            options={makes.map(value => ({ value, label: value }))}
            isMulti
            onChange={handleSelectChange}
            value={selectedLevels}
          />
        </label>
      </div>
    </form>
  );
};

export default SearchForm;

//  if (!price_per_hour.value && !languages.value && !levels.value) {
//    alert('Select any filter');
//    return;
//  }

// const filters = {
//   price_per_hour: price_per_hour.value,
//   languages: languages.value,
//   levels: levels.value,
// };
