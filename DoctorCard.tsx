import { Link } from 'react-router-dom';
import { Doctor } from '../types';

export const DoctorCard = ({ doctor }: { doctor: Doctor }) => (
  <div className="border rounded-xl shadow p-4">
    <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-full" />
    <h2 className="text-lg font-bold mt-2">{doctor.name}</h2>
    <p className="text-sm">{doctor.specialization}</p>
    <p className="text-xs text-green-600 mt-1">{doctor.availability}</p>
    <Link to={`/doctor/${doctor.id}`} className="text-blue-600 text-sm mt-2 inline-block">View Profile</Link>
  </div>
);
