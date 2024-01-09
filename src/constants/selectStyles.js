const commonStyles = {
  control: provided => ({
    ...provided,
    borderRadius: '14px',
    border: 'none',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #CBDED3',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'none' : 'white',
    color: state.isSelected ? 'rgba(18, 20, 23, 0.2)' : 'rgba(18, 20, 23, 0.2)',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '20px',
    padding: '0',
    '&:hover': {
      backgroundColor: 'none',
      color: '#121417',
    },
  }),
  placeholder: provided => ({
    ...provided,
    color: '#121417',
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '12px',
    border: 'none',
    boxShadow: 'none',
  }),
  menuList: provided => ({
    ...provided,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    overflowY: 'hidden',
    maxHeight: 'auto',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: '#555',
  }),
  multiValue: provided => ({
    ...provided,
    backgroundColor: 'transparent',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '20px',
  }),
  multiValueRemove: provided => ({
    ...provided,
    display: 'none',
  }),
};

export const customStylesLanguages = {
  ...commonStyles,
  control: provided => ({
    ...commonStyles.control(provided),
    width: '221px',
  }),
  menuList: provided => ({
    ...commonStyles.menuList(provided),
    padding: '14px 54px 18px 18px',
  }),
};

export const customStylesLevels = {
  ...commonStyles,
  control: provided => ({
    ...commonStyles.control(provided),
    width: '198px',
  }),
  menuList: provided => ({
    ...commonStyles.menuList(provided),
    padding: '14px 18px',
  }),
};

export const customStylesPrice = {
  ...commonStyles,
  control: provided => ({
    ...commonStyles.control(provided),
    width: '144px',
  }),
  menuList: provided => ({
    ...commonStyles.menuList(provided),
    padding: '14px 85px 14px 18px',
  }),
};

export const formatOptionLabel = ({ value }) => (
  <div
    style={{
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }}
  >
    {value}
  </div>
);
