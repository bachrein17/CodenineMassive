import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Notification() {
  return (
    <div className="modal fade" id="notificationModal" tabIndex="-1" aria-labelledby="notificationModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="notificationModalLabel">Notifikasi</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Ini adalah popup notifikasi.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Tutup</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
