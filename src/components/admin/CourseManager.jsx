import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

const CourseManager = () => {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({ title: '', category: '', description: '', price: '', image_url: '' });
  const [editingId, setEditingId] = useState(null);

  const fetchCourses = async () => {
    const { data } = await supabase.from('courses').select('*').order('id');
    if (data) setCourses(data);
  };

  useEffect(() => { fetchCourses(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await supabase.from('courses').update(form).eq('id', editingId);
    } else {
      await supabase.from('courses').insert([form]);
    }
    setForm({ title: '', category: '', description: '', price: '', image_url: '' });
    setEditingId(null);
    fetchCourses();
  };

  const handleEdit = (course) => {
    setForm(course);
    setEditingId(course.id);
  };

  const handleDelete = async (id) => {
    await supabase.from('courses').delete().eq('id', id);
    fetchCourses();
  };

  return (
    <div className="admin-section">
      <h2>Manage Courses</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <input placeholder="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
        <input placeholder="Category" value={form.category} onChange={e => setForm({...form, category: e.target.value})} required />
        <textarea placeholder="Description" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
        <input placeholder="Price" value={form.price} onChange={e => setForm({...form, price: e.target.value})} required />
        <input placeholder="Image URL" value={form.image_url} onChange={e => setForm({...form, image_url: e.target.value})} />
        <button type="submit" className="admin-btn">{editingId ? 'Update' : 'Add'} Course</button>
        {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ title: '', category: '', description: '', price: '', image_url: '' }); }}>Cancel</button>}
      </form>
      <div className="admin-list">
        {courses.map(course => (
          <div key={course.id} className="admin-list-item">
            <span>{course.title} ({course.category})</span>
            <div>
              <button onClick={() => handleEdit(course)}>Edit</button>
              <button onClick={() => handleDelete(course.id)} className="danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseManager;