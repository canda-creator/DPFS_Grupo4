export default function Users({ users }) {
  return (
    <main>
      {users.map((user, index) => (
        <div key={index}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </main>
  );
}
