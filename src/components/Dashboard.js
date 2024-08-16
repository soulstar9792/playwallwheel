import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user', { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        console.error('User not authenticated:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
          {/* Your lottery game component or content */}
        </div>
      ) : (
        <a href="http://localhost:5000/auth/discord">Log in with Discord</a>
      )}
    </div>
  );
};

export default Dashboard;