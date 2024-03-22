
import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import { useState } from 'react';
function App() {
  const initial = JSON.parse(localStorage.getItem('blogs')) || [
    {title: 'First Blog', description: 'This my first Blog'},
    {title: 'Second Blog', description: 'This my first Blog'},
    {title: 'Third Blog', description: 'This my first Blog'},
    {title: 'Last Blog', description: 'This my first Blog'}
  ]

  const [blogs, setBlogs] = useState(initial)
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogDescription, setNewBlogDescription] = useState('');
  const [editingId, setEditingId] = useState(null); 

  useEffect(() => {
    // update the local storge  whenever the blogs state change
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }), [blogs]

  const handelTitle = (event) => {
    setNewBlogTitle(event.target.value);
  };

  const handelDescription = (event) => {
    setNewBlogDescription(event.target.value);
  };
  const handelAddPost = () => {
    if(newBlogTitle && newBlogDescription) {
      const newBlog = {
        id: Date.now(),
        title: newBlogTitle, 
        description: newBlogDescription};
      setBlogs([...blogs, newBlog]);
      
      // Clear input fields after adding the post
      setNewBlogTitle('');
      setNewBlogDescription('');
    } else {
      alert('Please enter both title end description for new blog.')
    } 
  };
  // edit blog
  const handleEditBlog = (id) => {
    // Set the ID of the post being edited
    setEditingId(id);
    setNewBlogTitle(title);
    setNewBlogDescription(description);
  };
  // handel and save
  const handelSaveEdit = (id) => {
    const editedBlogIndex = blogs.findIndex(blog => blog.id === id);
    const updatedBlogs = [...blogs];
    updatedBlogs[editedBlogIndex].title = newBlogTitle;
    updatedBlogs[editedBlogIndex].description = newBlogDescription;
    setEditingId(null);
    setBlogs(updatedBlogs);
    setNewBlogTitle('');
    setNewBlogDescription('');
  };


  
  // delete blog
  const handleDeleteBlog = (id) => {
    const updatedBlogs = blogs.filter(post => post.id !== id);
    setBlogs(updatedBlogs);
  };
  return (
    
    <div className="App">
      <h1 className="header">Blog Posts</h1>
      <ul className="blog-list">
        {/* Render blog posts */}
        {blogs.map(post => (
          <li key={post.id} className="blog-item">
            {editingId === post.id ? (
              <div>
                <input
                  type="text"
                  value={newBlogTitle}
                  onChange={handelTitle}
                  className="input-title"
                />
                 <textarea
                  value={newBlogDescription}
                  onChange={handelDescription}
                  className="input-description"
                />
                <button onClick={() => handelSaveEdit(post.id)} className="save-button">Save</button>

              </div>
            ) : (
              <div>
                   <h2>{post.title}</h2>
                <p>{post.description}</p>
                <button onClick={() => handleEditBlog(post.id)} className="edit-button">Edit</button>
                <button onClick={() => handleDeleteBlog(post.id)} className="delete-button">Delete</button>

              </div>

            )}
          </li>
        ))}
      </ul>
      {/* add form for new blog */}
      <form className="add-post-form" onSubmit={(event) => event.preventDefault}>
        <input
        type='text'
        placeholder='Enter Title Here'
        value={newBlogTitle}
        onChange={handelTitle}
        className="input-title"/>
        <textarea
        placeholder='Enter Description Here'
        value={newBlogDescription}
        onChange={handelDescription}
        className="input-description"/>
        <button onClick={handelAddPost} className="add-button">Add Blog</button>
   {/* it work */}

      </form>
    </div>
    
  );
}

export default App;
