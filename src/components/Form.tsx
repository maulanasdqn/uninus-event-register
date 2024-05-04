import React, { useState } from 'react';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    nama: '',
    nim: '',
    kelas: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Anda Sudah Mendaftar', formData);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nama" className="block mb-2">Nama</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            className="border rounded px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nim" className="block mb-2">NIM</label>
          <input
            type="text"
            id="nim"
            name="nim"
            value={formData.nim}
            onChange={handleChange}
            className="border rounded px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="kelas" className="block mb-2">Kelas</label>
          <input
            type="text"
            id="kelas"
            name="kelas"
            value={formData.kelas}
            onChange={handleChange}
            className="border rounded px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded px-4 py-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Daftar
        </button>
      </form>
    </div>
  );
};

export default Form;
