interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23,
    location: "San Francisco",
  };
  
  const student2: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "Paris",
  };
  
  const studentsList: Student[] = [student1, student2];
  
  const renderTable = (students: Student[]): void => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
  
    // Create a header row
    const headerRow = document.createElement('tr');
    const firstNameHeader = document.createElement('th');
    firstNameHeader.textContent = 'First Name';
    const locationHeader = document.createElement('th');
    locationHeader.textContent = 'Location';
    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);
    tbody.appendChild(headerRow);
  
    students.forEach((student) => {
      const row = document.createElement('tr');
  
      const firstNameCell = document.createElement('td');
      firstNameCell.textContent = student.firstName;
      row.appendChild(firstNameCell);
  
      const locationCell = document.createElement('td');
      locationCell.textContent = student.location;
      row.appendChild(locationCell);
  
      tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
    document.body.appendChild(table);
  };
  
  renderTable(studentsList);