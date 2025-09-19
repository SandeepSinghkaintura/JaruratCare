import React, { useEffect, useState } from "react";
import "../style/PatientsPage.css"; 

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch patients");
        const data = await res.json();

        const formatted = data.map((p) => ({
          id: p.id,
          name: p.name,
          age: Math.floor(Math.random() * 30) + 20,
          contact: p.phone,
          email: p.email,
          address: `${p.address.street}, ${p.address.city}`,
        }));

        setPatients(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="loading">Loading patients...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="patients-page">
      <h1 className="title">Patients</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search patients by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {/* Patients Grid */}
      <div className="patients-grid">
        {filteredPatients.map((patient) => (
          <div key={patient.id} className="patient-card">
            <h2 className="patient-name">{patient.name}</h2>
            <p>Age: {patient.age}</p>
            <p>Contact: {patient.contact}</p>
            <button
              onClick={() => setSelectedPatient(patient)}
              className="details-btn"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Patient Details Modal */}
      {selectedPatient && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedPatient.name}</h2>
            <p><strong>Age:</strong> {selectedPatient.age}</p>
            <p><strong>Email:</strong> {selectedPatient.email}</p>
            <p><strong>Contact:</strong> {selectedPatient.contact}</p>
            <p><strong>Address:</strong> {selectedPatient.address}</p>
            <button
              onClick={() => setSelectedPatient(null)}
              className="close-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
