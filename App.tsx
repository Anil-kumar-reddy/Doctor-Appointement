// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/doctor/:id" element={<DoctorProfile />} />
    <Route path="/book/:id" element={<BookAppointment />} />
  </Routes>
</BrowserRouter>
