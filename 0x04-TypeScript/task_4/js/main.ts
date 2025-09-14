/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />

namespace Subjects {
    export const cTeacher: Teacher = {
        firstName: "Abeba",
        lastName: "Tola",
        experienceTeachingC: 10
    };

    export const cpp = new Cpp();
    export const java = new Java();
    export const react = new React();

    cpp.setTeacher(cTeacher);
    java.setTeacher(cTeacher);
    react.setTeacher(cTeacher);

    console.log("C++:");
    console.log(cpp.getRequirements());
    console.log(cpp.getAvailableTeacher());
    console.log();

    console.log("Java:");
    console.log(java.getRequirements());
    console.log(java.getAvailableTeacher());
    console.log();

    console.log("React:");
    console.log(react.getRequirements());
    console.log(react.getAvailableTeacher());
}
