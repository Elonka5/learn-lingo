import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import Select from 'react-select';
import { makes, languages, pricePoints } from '../../helpers/searchForm';
import { LabWrap, SelectWrapper } from './SearchFormStyled';
import {
  customStylesLanguages,
  customStylesLevels,
  customStylesPrice,
  formatOptionLabel,
} from '../../constants/selectStyles';

const SearchForm = () => {
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(0);

  const dispatch = useDispatch();

  const handleLevelsChange = selectedOptions => {
    setSelectedLevels(selectedOptions);

    const filters = {
      levels: selectedOptions.map(option => option.value),
      languages: selectedLanguages.map(option => option.value),
      price_per_hour: selectedPrice,
    };

    dispatch(setFilter(filters));
  };

  const handleLanguagesChange = selectedOptions => {
    setSelectedLanguages(selectedOptions);

    const filters = {
      levels: selectedLevels.map(option => option.value),
      languages: selectedOptions.map(option => option.value),
      price_per_hour: selectedPrice,
    };

    dispatch(setFilter(filters));
  };

  const handlePriceChange = selectedOption => {
    const newSelectedPrice = selectedOption
      ? Number(selectedOption.value)
      : null;

    setSelectedPrice(newSelectedPrice);

    const filters = {
      levels: selectedLevels.map(option => option.value),
      languages: selectedLanguages.map(option => option.value),
      price_per_hour: newSelectedPrice,
    };

    dispatch(setFilter(filters));
  };

  return (
    <form>
      <SelectWrapper>
        <LabWrap>
          <p>Languages</p>
          <Select
            styles={customStylesLanguages}
            name="languages"
            placeholder="Select language"
            options={languages.map(value => ({ value, label: value }))}
            isMulti
            onChange={handleLanguagesChange}
            value={selectedLanguages}
          />
        </LabWrap>
        <LabWrap>
          <p>Level of knowledge</p>
          <Select
            name="levels"
            styles={customStylesLevels}
            placeholder="Select level"
            options={makes.map(value => ({ value, label: value }))}
            isMulti
            onChange={handleLevelsChange}
            value={selectedLevels}
            formatOptionLabel={formatOptionLabel}
          />
        </LabWrap>
        <LabWrap>
          <p>Price</p>
          <Select
            name="price_per_hour"
            styles={customStylesPrice}
            placeholder="Select price"
            options={pricePoints}
            onChange={handlePriceChange}
            value={pricePoints.find(option => option.value === selectedPrice)}
          />
        </LabWrap>
      </SelectWrapper>
    </form>
  );
};

export default SearchForm;
