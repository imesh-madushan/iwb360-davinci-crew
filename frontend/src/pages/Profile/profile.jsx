// import React from 'react';
// import './profile.css';

// const ProfilePage = () => {
//   return (
//     <div className="profile-container">
//       <aside className="profile-sidebar">
//         <h1 className="profile-logo">APP LOGO</h1>
//         <nav className="profile-nav">
//           <ul>
//             <li>Dashboard</li>
//             <li>Upcoming</li>
//             <ul>
//               <li>My meetings</li>
//               <li>Enrolled</li>
//             </ul>
//             <li>Create</li>
//           </ul>
//         </nav>
//         <button className="profile-logout">Logout</button>
//       </aside>

//       <div className="profile-main-content">
//         <header className="profile-header">
//           <div className="profile-search-container">
//             <input type="text" placeholder="Search Text" className="profile-search-input" />
//           </div>
//           <div className="profile-header-right">
//             <span className="profile-notification-icon">🔔</span>
//             <div className="profile-user-avatar">
//               <img src="https://via.placeholder.com/40" alt="User Avatar" />
//             </div>
//           </div>
//         </header>

//         <div className="profile-content">
//           <h2>Ongoing</h2>
//           <div className="profile-event-grid">
//             <EventCard />
//             <EventCard />
//             <EventCard />
//             <EventCard />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const EventCard = () => {
//   return (
//     <div className="profile-event-card">
//       <div className="profile-event-card-header">
//         <span className="profile-event-icon">👤</span>
//         <h3>Name of the Event</h3>
//       </div>
//       <p>Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
//       <div className="profile-event-card-footer">
//         <button className="profile-enroll-btn">Enroll</button>
//         <span className="profile-bookmark-icon">🔖</span>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;