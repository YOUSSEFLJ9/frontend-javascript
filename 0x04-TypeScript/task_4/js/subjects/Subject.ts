/// <reference path="Teacher.ts" />
import { Teacher } from "./Teacher";

namespace Subjects {
export class Subject {
teacher: Teacher;
setTeacher(teacher:Teacher)
    : 
    void {
      this.teacher = teacher;
    }
  }
}
