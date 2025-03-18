import React from 'react';
import './App.css';
import './stylesheets/toastify.css';
import './stylesheets/style.css';
import user1Image from './images/user1.png'; // Đảm bảo bạn import đúng hình ảnh
import user2Image from './images/user2.png';
import trashImage from './images/trash.png';
import attachmentImage from './images/attachment.png';

function Inbox() {
  return (
    <div>
      {/* Menu */}
      <div className="menu">
        <div className="menu-item">
          <a href="/inbox">Inbox</a>
        </div>
        <div className="menu-item">
          <a href="/users">Users</a>
        </div>
        <div className="menu-item">
          <a href="/">Login</a>
        </div>
      </div>

      {/* Chat Container */}
      <div id="chat-container">
        {/* Search Container */}
        <div id="search-container">
          <input type="text" placeholder="Search" />
        </div>

        {/* Conversation List */}
        <div id="conversation-list">
          <div className="conversation active">
            <img src={user1Image} alt="Sumit" />
            <div className="title-text">Kazi Ariyan</div>
            <div className="created-date">Nov 16</div>
            <div className="conversation-message">This is a message</div>
          </div>
          <div className="conversation">
            <img src={user2Image} alt="Sumit" />
            <div className="title-text">Kazi Ariyan</div>
            <div className="created-date">Nov 16</div>
            <div className="conversation-message">This is a message</div>
          </div>
        </div>

        {/* New Message Button */}
        <div id="new-message-container">
          <a href="#">+</a>
        </div>

        {/* Chat Title */}
        <div id="chat-title">
          <span>Ariyan</span>
          <img src={trashImage} alt="Delete Conversation" />
        </div>

        {/* Chat Message List */}
        <div id="chat-message-list">
          <div className="message-row other-message">
            <div className="message-content">
              <img src={user1Image} alt="Sumit" />
              <div className="message-text">Ok then</div>
              <div className="message-time">Nov 16</div>
            </div>
          </div>
          <div className="message-row you-message">
            <div className="message-content">
              <div className="message-text">Lorem ipsum dolor sit amet</div>
              <div className="message-time">Nov 16</div>
            </div>
          </div>
        </div>

        {/* Chat Form */}
        <div id="chat-form">
          <img src={attachmentImage} alt="Add Attachment" />
          <input type="text" placeholder="Type a message" />
        </div>
      </div>

      {/* Modal for Creating New Conversation */}
      <div className="modal-wrapper">
        <div className="modal">
          <a href="#" className="modal-close">+</a>
          <div className="modal-title">
            <h2>Create New Conversation</h2>
          </div>
          <div className="modal-body">
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Username" />
              <input type="button" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
