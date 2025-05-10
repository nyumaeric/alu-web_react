interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allows any other property with a string key and any type
  }
  
  // Example usage:
  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false, // This additional property is allowed due to the index signature
  };
  
  console.log(teacher3);
  
  // You can also create a teacher with yearsOfExperience
  const teacherWithExperience: Teacher = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: 'New York',
    subject: 'Math',
  };
  
  console.log(teacherWithExperience);