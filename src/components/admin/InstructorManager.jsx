import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

const InstructorManager = () => {
  const [instructors, setInstructors] = useState([]);
  const [form, setForm] = useState({ name: '', role: '', bio: '', photo_url: '' });
  const [editingId, setEditingId] = useState(null);

  const fetchInstructors = async () => {
    const { data } = await supabase.from('instructors').select('*').order('id');
    if (data) setInstructors(data);
  };

  useEffect(() => { fetchInstructors(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await supabase.from('instructors').update(form).eq('id', editingId);
    } else {
      await supabase.from('instructors').insert([form]);
    }
    setForm({ name: '', role: '', bio: '', photo_url: '' });
    setEditingId(null);
    fetchInstructors();
  };

  const handleEdit = (inst) => {
    setForm(inst);
    setEditingId(inst.id);
  };

  const handleDelete = async (id) => {
    await supabase.from('instructors').delete().eq('id', id);
    fetchInstructors();
  };

  return (
    <div className="admin-section">
      <h2>Manage Instructors</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <input placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        <input placeholder="Role" value={form.role} onChange={e => setForm({...form, role: e.target.value})} />
        <textarea placeholder="Bio" value={form.bio} onChange={e => setForm({...form, bio: e.target.value})} />
        <input placeholder="Photo URL" value={form.photo_url} onChange={e => setForm({...form, photo_url: e.target.value})} />
        <button type="submit" className="admin-btn">{editingId ? 'Update' : 'Add'} Instructor</button>
        {editingId && <button type="button" onClick={() => { setEditingId(null); setForm({ name: '', role: '', bio: '', photo_url: '' }); }}>Cancel</button>}
      </form>
      <div className="admin-list">
        {instructors.map(inst => (
          <div key={inst.id} className="admin-list-item">
            <span>{inst.name} ({inst.role})</span>
            <div>
              <button onClick={() => handleEdit(inst)}>Edit</button>
              <button onClick={() => handleDelete(inst.id)} className="danger">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorManager;