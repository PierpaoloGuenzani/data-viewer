import { useState } from 'react';

function createRandomUsers(count = 5) {
  const users = [];
  
  for (let i = 0; i < count; i++) {
    users.push({
      userId: "chance.guid()",
      name: "chance.name()",
      email: "chance.email()",
      birthdate: "chance.birthday()",
    });
  }

  return users;
}

export default function Table() {
  const [tableData, setTableData] = useState([]);
  
  const handleGenerateUsers = () => {
    const newUsers = createRandomUsers()
    console.log(newUsers);
    setTableData([...tableData, ...newUsers])
  }

  const handleClearUsers = () => {
    setTableData([]);
  }

  return (
    <div>
      <h1>Dynamic Table Application</h1>
      <button onClick={handleGenerateUsers}>Generate Random Users</button>
      <button onClick={handleClearUsers}>Clear Users</button>
      <table style={{width: '100%'}}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {
            tableData.map((obj) => {
              return (
                <tr>
                  <td>{obj.userId}</td>
                  <td>{obj.name}</td>
                  <td>{obj.email}</td>
                  <td>{obj.birthdate.toString()}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}
