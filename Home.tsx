import { useEffect, useState } from 'react';
import { Doctor } from '../types';
import { DoctorCard } from '../components/DoctorCard';
import data from '../data/doctors.json';

export const Home = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setDoctors(data);
  }, []);

  const filtered = doctors.filter(doc =>
    doc.name.toLowerCase().includes(search.toLowerCase()) ||
    doc.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Find a Doctor</h1>
      <input
        type="text"
        placeholder="Search by name or specialization"
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map(doc => <DoctorCard key={doc.id} doctor={doc} />)}
      </div>
    </div>
  );
};