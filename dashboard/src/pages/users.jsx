import "./users.css";

export default function Users({ users }) {
  const urlBase = "http://localhost:3000/";
  const urlBaseUsers = urlBase + "media/users/";

  return (
    <main className="users-container">
      <div className="users-header">
        <h1>Todos los Usuarios</h1>
        <p className="users-total">Total: {users.length} usuarios</p>
      </div>

      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-header">
              <img
                className="user-avatar"
                src={urlBaseUsers + user.profile}
                alt={`Avatar de ${user.name}`}
              />
              <div className="user-info">
                <h2 className="user-name">{user.name} {user.lastname}</h2>
                <p className="user-email">{user.email}</p>
                <span className={`user-rol ${user.rol}`}>{user.rol}</span>
              </div>
            </div>
            
            <div className="user-details">
              <div className="user-detail">
                <span className="detail-label">ID:</span>
                <span className="detail-id">{user.id}</span>
              </div>
              <div className="user-detail">
                <span className="detail-label">Fecha de creación:</span>
                <span className="detail-value">
                  {new Date(user.createdAt).toLocaleDateString()}
                </span>
              </div>
              {user.updatedAt && (
                <div className="user-detail">
                  <span className="detail-label">Última actualización:</span>
                  <span className="detail-value">
                    {new Date(user.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {users.length === 0 && (
        <div className="no-users">
          <p>No hay usuarios registrados</p>
        </div>
      )}
    </main>
  );
}