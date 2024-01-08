// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTeachers } from '../../redux/Teachers/TeachersThunk';
import TeacherCard from '../TeacherCard/TeacherCard';
import { TeachersList } from './TeacherCatalogStyled';
// import { selectFilteredTeachers } from '../../redux/selectors';
// import SearchForm from '../SearchForm/SearchForm';
// import Filter from '../TeacherFilter/TeacherFilter';

const TeacherCatalog = ({ teachers }) => {
  //   const teacherss = useSelector(state => state.teachers.teachersData);
  //   console.log(teacherss);
  //   const [visibleTeachers, setVisibleTeachers] = useState(4);
  //   const filteredTeachers = useSelector(selectFilteredTeachers);
  //   console.log(filteredTeachers);
  //   const [languageFromFilter, setLanguageFromFilter] = useState(false);
  //   const [levelFromFilter, setLevelFromFilter] = useState(false);
  //   const [priceFromFilter, setPriceFromFilter] = useState(false);

  //   const filteredTeachers = teachers.filter(teacher => {
  //     if (!languageFromFilter && !levelFromFilter && !priceFromFilter) {
  //       return true;
  //     }
  //     const languageFilterResult =
  //       !languageFromFilter || teacher.languages.includes(languageFromFilter);
  //     const levelFilterResult =
  //       !levelFromFilter || teacher.levels.includes(levelFromFilter);
  //     const priceFilterResult =
  //       !priceFromFilter || `${teacher.price_per_hour}` === priceFromFilter;
  //     return languageFilterResult && levelFilterResult && priceFilterResult;
  //   });

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchTeachers());
  //   }, [dispatch]);

  //   const loadMore = () => {
  //     setVisibleTeachers(prevState => prevState + 4);
  //   };

  return (
    <>
      {/* <Filter
        teachers={teachers}
        setLanguageFromFilter={data => setLanguageFromFilter(data)}
        setLevelFromFilter={data => setLevelFromFilter(data)}
        setPriceFromFilter={data => setPriceFromFilter(data)}
      />
      {filteredTeachers?.length !== 0 ? (
        <TeachersList>
          {filteredTeachers?.slice(0, visibleTeachers).map(teacher => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </TeachersList>
      ) : (
        <div>
          <p>No teacher was found according to your criteria</p>
        </div>
      )} */}
      {/* <SearchForm /> */}
      {/* {filteredTeachers.length> 0 && } */}
      <TeachersList>
        {/* {teachers &&
          teachers
            .slice(0, visibleTeachers)
            .map(teacher => <TeacherCard key={teacher.id} teacher={teacher} />)} */}
        {teachers.map(teacher => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </TeachersList>
      {/* {visibleTeachers < teachers.length && (
        <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
      )} */}
    </>
  );
};

export default TeacherCatalog;

// {
//   filteredTeachers?.length !== 0 ? (
//     <TeachersList>
//       {filteredTeachers?.slice(0, visibleTeachers).map(el => (
//         <TeacherCard key={nanoid()} teacher={el} />
//       ))}
//     </TeachersList>
//   ) : (
//     <div>
//       <p>No teacher was found according to your criteria</p>
//     </div>
//   );
// }
