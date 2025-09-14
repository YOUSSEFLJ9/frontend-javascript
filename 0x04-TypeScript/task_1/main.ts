//  interfaces
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    contract?: boolean;
}

interface Director extends Teacher {
    numberOfReports: number;
}

export function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).numberOfReports !== undefined;
}

// Function to execute work based on employee type
export function executeWork(employee: Teacher | Director): string {
    if (isDirector(employee)) {
        return `Getting to work on directing ${employee.numberOfReports} reports.`;
    } else {
        return `Getting to work on teaching tasks.`;
    }
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
    yearsOfExperience: 10
};

const director1: Director = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: true,
    location: 'New York',
    numberOfReports: 5,
    yearsOfExperience: 15
};

console.log(teacher3);
console.log(director1);

console.log(isDirector(teacher3)); 
console.log(isDirector(director1));

console.log(executeWork(teacher3)); 
console.log(executeWork(director1)); 

