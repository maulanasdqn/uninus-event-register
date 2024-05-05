import React from 'react';
import TableList from './components/TableList';
import Form from './components/Form';

const App : React.FC = () => {
  const students = [
    { id: 1, name: 'No Name', nim: 123456789, prodi: 'informatika' },
    { id: 2, name: 'Hello', nim: 12345, prodi: 'informatika' },
    { id: 3, name: 'Welcome', nim: 1234567, prodi: 'informatika' },
  ];

  return (
    <div className='container mx-auto mt-4'>
      <h1 className='text-2xl font-bold'>List Pendaftar</h1>
      <TableList data={students} />
      <div className="flex-1 flex items-center justify-center">
        <Form />
      </div>
    </div>
  );
};

export default App;
