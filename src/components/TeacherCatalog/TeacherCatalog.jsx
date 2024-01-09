import TeacherCard from '../TeacherCard/TeacherCard';
import { TeachersList } from './TeacherCatalogStyled';

const TeacherCatalog = ({ teachers }) => {
  return (
    <TeachersList>
      {teachers.map(teacher => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </TeachersList>
  );
};

export default TeacherCatalog;
