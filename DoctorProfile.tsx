import { useParams, Link } from 'react-router-dom';
import { Doctor } from '../types';
import data from '../data/doctors.json';

export const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = (data as Doctor[]).find(doc => doc.id === id);

  if (!doctor) return <div>Doctor not found.</div>;

  return (
    <div className="p-6">
      <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-full mb-4" />
      <h2 className="text-xl font-bold">{doctor.name}</h2>
      <p>{doctor.specialization}</p>
      <p className="text-green-600 mt-1">{doctor.availability}</p>
      <h3 className="mt-4 font-semibold">Schedule:</h3>
      <ul className="list-disc list-inside">
        {Object.entries(doctor.schedule).map(([date, times]) => (
          <li key={date}>{date}: {times.join(', ')}</li>
        ))}
      </ul>
      <Link
        to={`/book/${doctor.id}`}
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
      >
        Book Appointment
      </Link>
    </div>
  );
};
