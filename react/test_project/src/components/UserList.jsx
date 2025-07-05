function UserList({ users }) {
    return ( <ul>
        {users.map(user => (
            <li key={user.id}>
                {user.name} - {user.age} years old
            </li>
        ))}
    </ul> );
}

export default UserList;