/// <reference path="Cpp.ts" />
/// <reference path="Java.ts" />
/// <reference path="React.ts" />
/// <reference path="Teacher.ts" />
namespace Subjects {
  export class Subject {
    teacher: Teacher;

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
