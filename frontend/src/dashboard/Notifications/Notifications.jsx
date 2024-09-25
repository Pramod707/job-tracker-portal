import React, { useState, useEffect, useRef } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [unseenCount, setUnseenCount] = useState(0);
  const unseenSectionRef = useRef(null);

  useEffect(() => {
    const fetchedNotifications = [
      { id: 1, user: { name: 'Alice Johnson', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' }, message: 'updated their profile.', time: '2 mins ago', seen: false },
      { id: 2, user: { name: 'Bob Smith', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' }, message: 'commented on your post.', time: '10 mins ago', seen: false },
      { id: 3, user: { name: 'Charlie Brown', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' }, message: 'accepted your friend request.', time: '1 hour ago', seen: true },
      { id: 4, user: { name: 'Dave Wilson', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' }, message: 'sent you a message.', time: '5 hours ago', seen: false },
      { id: 5, user: { name: 'Eve Davis', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' }, message: 'reacted to your post.', time: '3 days ago', seen: true },
    ];
    setNotifications(fetchedNotifications);
    setUnseenCount(fetchedNotifications.filter((n) => !n.seen).length);
  }, []);

  const unseenNotifications = notifications.filter((notif) => !notif.seen);
  const seenNotifications = notifications.filter((notif) => notif.seen);

  const handleNotificationClick = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, seen: true } : notif))
    );
    setUnseenCount((prev) => prev - 1);
  };

  const scrollToUnseen = () => {
    if (unseenSectionRef.current) {
      unseenSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="relative inline-block mb-4">
        <button onClick={scrollToUnseen} className="relative text-lg focus:outline-none">
          <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.992 2.992 0 0018 14V10a6 6 0 00-12 0v4c0 .762-.242 1.457-.605 2.095L3 17h5" />
          </svg>
          {unseenCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
              {unseenCount}
            </span>
          )}
        </button>
      </div>

      <h1 className="text-2xl font-semibold mb-4">Notifications</h1>

      <h2 ref={unseenSectionRef} className="text-xl font-semibold mb-2">Unseen Notifications</h2>
      {unseenNotifications.length === 0 ? (
        <p className="text-gray-500">No new notifications</p>
      ) : (
        <ul className="space-y-4">
          {unseenNotifications.map((notification) => (
            <li
              key={notification.id}
              className="shadow-md rounded-lg p-4 border flex items-start bg-blue-50 border-blue-200 cursor-pointer"
              onClick={() => handleNotificationClick(notification.id)}
            >
              <img src={notification.user.avatar} alt={`${notification.user.name}'s avatar`} className="w-10 h-10 rounded-full mr-4" />
              <div>
                <p className="text-gray-800">
                  <a href={`/profile/${notification.user.name}`} className="font-semibold hover:underline">{notification.user.name}</a> {notification.message}
                </p>
                <span className="text-sm text-gray-500">{notification.time}</span>
              </div>
              <span className="w-3 h-3 bg-red-500 rounded-full ml-2"></span>
            </li>
          ))}
        </ul>
      )}

      <h2 className="text-xl font-semibold mt-8 mb-2">Seen Notifications</h2>
      {seenNotifications.length === 0 ? (
        <p className="text-gray-500">No seen notifications</p>
      ) : (
        <ul className="space-y-4">
          {seenNotifications.map((notification) => (
            <li key={notification.id} className="shadow-md rounded-lg p-4 border flex items-start bg-gray-50 border-gray-200">
              <img src={notification.user.avatar} alt={`${notification.user.name}'s avatar`} className="w-10 h-10 rounded-full mr-4" />
              <div>
                <p className="text-gray-800">
                  <a href={`/profile/${notification.user.name}`} className="font-semibold hover:underline">{notification.user.name}</a> {notification.message}
                </p>
                <span className="text-sm text-gray-500">{notification.time}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications



