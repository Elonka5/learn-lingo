import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import Select from 'react-select';
import { makes, languages, pricePoints } from '../../helpers/searchForm';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(0); // Додайте стан для ціни

  const handleLevelsChange = selectedOptions => {
    setSelectedLevels(selectedOptions);

    const filters = {
      levels: selectedOptions.map(option => option.value),
      languages: selectedLanguages.map(option => option.value),
      price_per_hour: selectedPrice, // Додайте ціну в фільтри
    };

    dispatch(setFilter(filters));
  };

  const handleLanguagesChange = selectedOptions => {
    setSelectedLanguages(selectedOptions);

    const filters = {
      levels: selectedLevels.map(option => option.value),
      languages: selectedOptions.map(option => option.value),
      price_per_hour: selectedPrice, // Додайте ціну в фільтри
    };

    dispatch(setFilter(filters));
  };

  const handlePriceChange = selectedOption => {
    const selectedPrice = selectedOption ? Number(selectedOption.value) : null;

    const filters = {
      levels: selectedLevels.map(option => option.value),
      languages: selectedLanguages.map(option => option.value),
      price_per_hour: selectedPrice,
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
            onChange={handleLevelsChange}
            value={selectedLevels}
          />
        </label>
        <label>
          <p>Languages</p>
          <Select
            name="languages"
            placeholder="Enter the text"
            options={languages.map(value => ({ value, label: value }))}
            isMulti
            onChange={handleLanguagesChange}
            value={selectedLanguages}
          />
        </label>
        <label>
          <p>Price</p>
          <Select
            name="price_per_hour"
            placeholder="Select price"
            options={pricePoints}
            onChange={handlePriceChange}
            value={pricePoints.find(option => option.value === selectedPrice)}
          />
        </label>
      </div>
    </form>
  );
};

export default SearchForm;
