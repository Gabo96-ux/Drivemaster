// src/pages/AdminDashboard.jsx
import { useState } from 'react';
import { useAdmin } from '../hooks/useAdmin';
import CourseManager from '../components/admin/CourseManager';
import InstructorManager from '../components/admin/InstructorManager';
import BookingList from '../components/admin/BookingList';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { isAdmin } = useAdmin();
  const [activeTab, setActiveTab] = useState('courses');

  if (!isAdmin) return <div className="page-hero"><p>Access denied.</p></div>;

  const tabs = [
    { key: 'courses', label: 'Courses' },
    { key: 'instructors', label: 'Instructors' },
    { key: 'bookings', label: 'Bookings' },
  ];

  return (
    <main className="admin-dashboard">
      <section className="page-hero">
        <h1><span className="title-red">Admin</span> Dashboard</h1>
      </section>

      <div className="admin-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`admin-tab ${activeTab === tab.key ? 'admin-tab--active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="admin-content">
        {activeTab === 'courses' && <CourseManager />}
        {activeTab === 'instructors' && <InstructorManager />}
        {activeTab === 'bookings' && <BookingList />}
      </div>
    </main>
  );
};

export default AdminDashboard;