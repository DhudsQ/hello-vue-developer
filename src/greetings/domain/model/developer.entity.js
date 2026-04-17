export class Developer{

    #firstName;
    #lastName;
    constructor(firstName, #lastName){
        this.#firstName = firstName?.trim() || '';
        this.#lastName = firstName?.trim() || '';

    }

    get firstName(){
        return this.#firstName;
    }
    get lastName(){
        return this.#lastName;
    }
    get fullName(){
        return this.#firstName && this.#lastName?
             `${this.#firstName} ${this.#lastName}`
            : "Unknown";
    }
}