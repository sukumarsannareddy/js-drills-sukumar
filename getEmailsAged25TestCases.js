import { emailsOfAged25 } from "./getEmailsAged25.js";

const arrayOfObjects = [
    { 
       id: 1, 
       name: 'Alice', 
       age: 25,
       email: 'alice@example.com',
       city: 'New York',
       country: 'USA',
       hobbies: ['reading', 'painting'],
       isStudent: false
    },
    { 
       id: 2, 
       name: 'Bob', 
       age: 25,
       email: 'bob@example.com',
       city: 'London',
       country: 'UK',
       hobbies: ['playing guitar', 'hiking'],
       isStudent: true
    },
    { 
       id: 3, 
       name: 'Charlie', 
       age: 35,
       email: 'charlie@example.com',
       city: 'Paris',
       country: 'France',
       hobbies: ['cooking', 'gardening'],
       isStudent: false
    },
    { 
       id: 4, 
       name: 'David', 
       age: 28,
       email: 'david@example.com',
       city: 'Berlin',
       country: 'Germany',
       hobbies: ['photography', 'traveling'],
       isStudent: true
    },
    { 
       id: 5, 
       name: 'Eve', 
       age: 32,
       email: 'eve@example.com',
       city: 'Sydney',
       country: 'Australia',
       hobbies: ['yoga', 'surfing'],
       isStudent: false
    },
    { 
       id: 6, 
       name: 'Frank', 
       age: 33,
       email: 'frank@example.com',
       city: 'Los Angeles',
       country: 'USA',
       hobbies: ['playing basketball', 'reading'],
       isStudent: true
    },
    { 
       id: 7, 
       name: 'Grace', 
       age: 29,
       email: 'grace@example.com',
       city: 'Toronto',
       country: 'Canada',
       hobbies: ['painting', 'running'],
       isStudent: false
    },
    { 
       id: 8, 
       name: 'Hannah', 
       age: 31,
       email: 'hannah@example.com',
       city: 'Melbourne',
       country: 'Australia',
       hobbies: ['writing', 'knitting'],
       isStudent: true
    },
    { 
       id: 9, 
       name: 'Ivy', 
       age: 27,
       email: 'ivy@example.com',
       city: 'Tokyo',
       country: 'Japan',
       hobbies: ['playing piano', 'cooking'],
       isStudent: false
    },
    { 
       id: 10, 
       name: 'Jack', 
       age: 34,
       email: 'jack@example.com',
       city: 'Mumbai',
       country: 'India',
       hobbies: ['playing cricket', 'watching movies'],
       isStudent: true
    }
  ];
  


const arrayOfObjects1 = [
    { 
       id: 1, 
       name: 'Alice', 
       age: 24,
       email: 'alice@example.com',
       city: 'New York',
       country: 'USA',
       hobbies: ['reading', 'painting'],
       isStudent: false
    },
    { 
       id: 2, 
       name: 'Bob', 
       age: 22,
       email: 'bob@example.com',
       city: 'London',
       country: 'UK',
       hobbies: ['playing guitar', 'hiking'],
       isStudent: true
    },
    { 
       id: 3, 
       name: 'Charlie', 
       age: 22,
       email: 'charlie@example.com',
       city: 'Paris',
       country: 'France',
       hobbies: ['cooking', 'gardening'],
       isStudent: false
    },
    { 
       id: 4, 
       name: 'David', 
       age: 21,
       email: 'david@example.com',
       city: 'Berlin',
       country: 'Germany',
       hobbies: ['photography', 'traveling'],
       isStudent: true
    },
    { 
       id: 5, 
       name: 'Eve', 
       age: 23,
       email:'eve@example.com',
       city: 'Sydney',
       country: 'Australia',
       hobbies: ['yoga', 'surfing'],
       isStudent: false
    },
    { 
       id: 6, 
       name: 'Frank', 
       age: 18,
       email: 'frank@example.com',
       city: 'Los Angeles',
       country: 'USA',
       hobbies: ['playing basketball', 'reading'],
       isStudent: true
    },
    { 
       id: 7, 
       name: 'Grace', 
       age: 22,
       email: 'grace@example.com',
       city: 'Toronto',
       country: 'Canada',
       hobbies: ['painting', 'running'],
       isStudent: false
    },
    { 
       id: 8, 
       name: 'Hannah', 
       age: 21,
       email: 'hannah@example.com',
       city: 'Melbourne',
       country: 'Australia',
       hobbies: ['writing', 'knitting'],
       isStudent: true
    },
    { 
       id: 9, 
       name: 'Ivy', 
       age: 17,
       email: 'ivy@example.com',
       city: 'Tokyo',
       country: 'Japan',
       hobbies: ['playing piano', 'cooking'],
       isStudent: false
    },
    { 
       id: 10, 
       name: 'Jack', 
       age: 14,
       email: 'jack@example.com',
       city: 'Mumbai',
       country: 'India',
       hobbies: ['playing cricket', 'watching movies'],
       isStudent: true
    }
  ];
  
  console.log(emailsOfAged25(arrayOfObjects));  
  console.log(emailsOfAged25(arrayOfObjects1));  
  console.log(emailsOfAged25());  