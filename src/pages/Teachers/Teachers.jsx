import React from 'react';
import TeacherCatalog from '../../components/TeacherCatalog/TeacherCatalog';
import Container from '../../components/Container/Container';

const Teachers = () => {
  return (
    <main style={{ backgroundColor: '#F8F8F8' }}>
      <Container>
        <TeacherCatalog />
      </Container>
    </main>
  );
};

export default Teachers;
