import React, { useState } from 'react';

const TeacherFilters = ({ applyFilters }) => {
  const [priceFilter, setPriceFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');
  const [levelFilter, setLevelFilter] = useState('');

  const priceOptions = [25, 27, 28, 30, 32, 35];
  const languageOptions = [
    'English',
    'French',
    'German',
    'Spanish',
    'Mandarin Chinese',
    'Italian',
    'Korean',
    'Vietnamese',
  ];
  const levelOptions = [
    'A1 Beginner',
    'A2 Elementary',
    'B1 Intermediate',
    'B2 Upper-Intermediate',
    'C1 Advanced',
    'C2 Proficient',
  ];

  const handleApplyFilters = () => {
    // Передайте фільтри до батьківського компонента
    applyFilters({
      price: priceFilter,
      language: languageFilter,
      level: levelFilter,
    });
  };

  return (
    <div>
      {/* Фільтр за ціною */}
      <select
        value={priceFilter}
        onChange={e => setPriceFilter(e.target.value)}
      >
        <option value="">Select Price</option>
        {priceOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Фільтр за мовою */}
      <select
        value={languageFilter}
        onChange={e => setLanguageFilter(e.target.value)}
      >
        <option value="">Select Language</option>
        {languageOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Фільтр за рівнем знань */}
      <select
        value={levelFilter}
        onChange={e => setLevelFilter(e.target.value)}
      >
        <option value="">Select Level</option>
        {levelOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default TeacherFilters;
