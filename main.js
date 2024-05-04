let student1 = {
    name: "Maria",
    studentId: "CS001160",
    dateOfBirth: "10-01-1999",
    contactNumber: +923334451671,
    emailId: "maria123@yahoo.com",
    courseTitle: "Computer Science",
    coursesTaken: ["Maths", "Physics", "Computer Science"],
    semester: "Spring 2024",
    grades: { "Maths": "A", "Physics": "A+", "Computer Science": "A" },
    isPassed: true
};
let student2 = {
    name: "Sana",
    studentId: "CS001164",
    dateOfBirth: "5-06-1998",
    contactNumber: +923131149252,
    emailId: "sana45@yahoo.com",
    courseTitle: "MBA",
    coursesTaken: ["Accounting", "Finance", "Marketing"],
    semester: "Spring 2024",
    grades: { "Accounting": "A+", "Finance": "A", "Marketing": "A" },
    isPassed: true
};
let student3 = {
    name: "Ali",
    studentId: "CS001172",
    dateOfBirth: "15-05-1999",
    contactNumber: +923342676544,
    emailId: "ali666@yahoo.com",
    courseTitle: "Human Resource",
    coursesTaken: ["HRM Strategy", "Team Dynamics", "Performance Management"],
    semester: "Spring 2024",
    grades: { "HRM Strategy": "A+", "Team Dynamics": "B+", "Performance Management": "A" },
    isPassed: true
};
student1.name = "Maria Karim";
student2.name = "Sana Ali";
student3.name = "Ali Hussain";
student2.emailId = "sana555@hotmail.com";
console.log(`Student Names : ${student1.name} , ${student2.name} , ${student3.name}`);
console.log("Student Details:");
console.log(`Student Name: ${student1.name} , ${student1.studentId} , ${student1.courseTitle} : ${student1.coursesTaken}`);
console.log(`Student Name: ${student2.name} , ${student2.studentId} , ${student2.courseTitle} : ${student2.coursesTaken}`);
console.log(`Student Name: ${student3.name} , ${student3.studentId} , ${student3.courseTitle} : ${student3.coursesTaken}`);
console.log("Students Contact Information:");
console.log(`${student1.name},${student1.contactNumber},${student1.emailId}`);
console.log(`${student2.name},${student2.contactNumber},${student2.emailId}`);
console.log(`${student3.name},${student3.contactNumber},${student3.emailId}`);
export {};
