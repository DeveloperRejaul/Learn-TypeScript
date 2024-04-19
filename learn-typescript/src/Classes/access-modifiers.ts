/**
 * Access modifiers change the visibility of the properties and methods of a class. TypeScript provides three access modifiers:
 * private : modifier allows access within the same class.
 * Protected : modifier allows access within the same class and subclasses.
 * public : modifier allows access from any location.
 */

class Person {
    private ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`; 
    }
   
}