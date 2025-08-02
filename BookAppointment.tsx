import { useParams } from 'react-router-dom';
import { useState } from 'react';
import data from '../data/doctors.json';
import { Doctor } from '../types';

export const BookAppointment = () => {
  const { id } = useParams();
  const doctor = (data as Doctor[]).find(doc => doc.id === id);

  const [form, setForm] = useState({ name: '', email: '', date: '', time: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!doctor) return <div>Doctor not found.</div>;

  const availableTimes = doctor.schedule[form.date] || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Book with {doctor.name}</h2>
      {submitted ? (
        <div className="text-green-600">Appointment booked successfully!</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Name" required className="border p-2 w-full" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          <input type="email" placeholder="Email" required className="border p-2 w-full" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          <input type="date" required className="border p-2 w-full" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
          <select required className="border p-2 w-full" value={form.time} onChange={e => setForm({ ...form, time: e.target.value })}>
            <option value="">Select Time</option>
            {availableTimes.map(time => (
              <option key={time}>{time}</option>
            ))}
          </select>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Book</button>
        </form>
      )}
    </div>
  );
};