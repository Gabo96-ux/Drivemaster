import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
    // Real-time subscription (optional)
    const subscription = supabase
      .channel('bookings-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'bookings' }, () => {
        fetchBookings();
      })
      .subscribe();

    return () => { subscription.unsubscribe(); };
  }, []);

  const fetchBookings = async () => {
    const { data } = await supabase
      .from('bookings')
      .select('*, courses(title), instructors(name)')
      .order('created_at', { ascending: false });
    if (data) setBookings(data);
  };

  return (
    <div className="admin-section">
      <h2>Bookings</h2>
      <div className="bookings-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Email</th>
              <th>Course</th>
              <th>Instructor</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.id}>
                <td>{booking.student_name}</td>
                <td>{booking.email}</td>
                <td>{booking.courses?.title}</td>
                <td>{booking.instructors?.name}</td>
                <td>{booking.booking_date}</td>
                <td>{booking.booking_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingList;