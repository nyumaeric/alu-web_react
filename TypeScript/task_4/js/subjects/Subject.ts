namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
    }

    export class Subject {
      teacher: Subjects.Teacher = { firstName: '', lastName: '' }; // Explicitly referencing Teacher from Subjects namespace
  
      public setTeacher(teacher: Subjects.Teacher): void {
        this.teacher = teacher;
      }
    }
  }