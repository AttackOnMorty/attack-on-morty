---
title: The Essence of Programming
date: '2024-05-11'
spoiler: 'Program = Logic + Control + Data Structure'
---

> Program = Logic + Control + Data Structure

---

- [Two Papers](#two-papers)
- [The Role of Control in Algorithm](#the-role-of-control-in-algorithm)
- [How to Write Good Programs](#how-to-write-good-programs)
- [The Essence of Programming](#the-essence-of-programming)
- [Summary](#summary)

---

## Two Papers

### Algorithms + Data Structures = Programs

In 1976, [Niklaus Wirth](https://en.wikipedia.org/wiki/Niklaus_Wirth) wrote a book called [Algorithms + Data Structures = Programs](https://en.wikipedia.org/wiki/Algorithms_%2B_Data_Structures_%3D_Programs).

This expression tends to data structures and algorithms. It wants to separate the two. This was the path that was taken in the early days. They believe that if the data structure is well designed, the algorithm will become simple, and a good general algorithm should be able to be used on different data structures.

### Algorithm = Logic + Control

In 1979, [Robert Kowalski](https://en.wikipedia.org/wiki/Robert_Kowalski) published a paper called [Algorithm = Logic + Control](https://www.doc.ic.ac.uk/~rak/papers/algorithm%20=%20logic%20+%20control.pdf).

The second expression wants to express that the data structure is not complicated, but the algorithm is complicated. The algorithm consists of two logics, one is the real business logic, and the other is the control logic. Among the two logics, the more complex one is the business logic.

Robert mentioned in his paper:

> An algorithm can be regarded as consisting of a logic component, which specifies the knowledge to be used in solving problems, and a control component, which determines the problem-solving strategies by means of which that knowledge is used. The logic component determines the meaning of the algorithm whereas the control component only affects its efficiency. The efficiency of an algorithm can often be improved by improving the control component without changing the logic of the algorithm. We argue that computer programs would be more often correct and more easily improved and modified if their logic and control aspects were identified and separated in the program text.

There are two important points I want to elaborate on. One is the role of Control in Algorithm, and the other is how to write good programs.

#### The Role of Control in Algorithm

> The efficiency of an algorithm can often be improved by improving the control component without changing the logic of the algorithm.

It means `Control only affects the efficiency of Algorithm. It doesn't change Logic`. For example, we have a simple problem:

```plain
Given an integer n, calculate n!
```

In this program:

- **Logic** is always `n! = n * (n-1) * (n-2) * ... 2 * 1 = n * (n - 1)!`
- **Control** can be implemented in different ways with different efficiency:
  - Top-down using recursion: `O(n) / O(n)`
  - Bottom-up using iteration: `O(n) / O(1)`

```javascript
// Top-down
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Bottom-up
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
```

> For Control, in addition to the way the program is executed (top-down or bottom-up). It also includes parallel or serial, synchronous or asynchronous, as well as scheduling different execution paths or modules, and the storage relationship between data.
> ![algorithm=logic+control](./images/algorithm=logic+control.png)

#### How to Write Good Programs

> We argue that computer programs would be more often correct and more easily improved and modified if their logic and control aspects were identified and separated in the program text.

It means `effectively separating Logic and Control is the key to writing good programs`. For example, we have a function to validate user registration:

```javascript
function validate(data) {
  const { name, email, password, confirmPassword } = data;

  if (name === null || name.length < 3) {
    return { status: 1, message: 'Invalid name' };
  }

  if (checkEmail(email)) {
    return { status: 1, message: 'Invalid email' };
  }

  if (password === null || password.length < 6) {
    return { status: 1, message: 'Invalid password' };
  }

  if (password !== confirmPassword) {
    return { status: 1, message: 'Password not match' };
  }

  //...

  return { status: 0, message: 'Success' };
}
```

Although it's a small program, we can still see that logic and control are mixed in the function. It will become more and more complex as the business logic grows.

Logic is the floor of program complexity. Then, to control the program, we need to create a lot of control code. So the mixture of Logic + Control forms the final complexity of the program.

How can we improve the above code? Actually, we can create a DSL ([Domain-specific language](https://en.wikipedia.org/wiki/Domain-specific_language)) + a DSL parser to separate the logic and control.

> Except DSL, there are many other ways to separate Logic and Control, such as State Machine, Programming Paradigm, etc.

```javascript
const rules = [
  { id: 'name', type: 'text', minLength: 3,}
  { id: 'email', type: 'email' }
  { id: 'password', type: 'password', minLength: 6 }
  { id: 'confirmPassword', type: 'password', minLength: 6 }
]

const result = validate(data, rules)
```

In this way, DSL (`rules` variable) describes the logic, and the `validate` method becomes the control. The code now looks more readable and maintainable.

## The Essence of Programming

From the two expressions from two old gentlemen:

- `Programs = Algorithms + Data Structures`
- `Algorithm = Logic + Control`

We can get the formula:

- `Program = Logic + Control + Data Structure`

All programming methods actually revolve around these 3 things. For example:

- Like `Map/Reduce/Filter` in functional programming, they are all kind of a **control**. The Lambda expression passed to these control modules is the **logic** of the problem we want to solve, and together they form an **algorithm**. Finally, we put the data in a **data structure** for processing, and it finally became our **program**.
- Like `Program to an interface, not an implementation` in object-oriented programming. Interfaces are abstractions of logic. The real **logic** is placed in different embodiment classes. **Controls** such as polymorphism or dependency injection are used to complete the manipulation of **data** in different situations.

All programming languages (or programming paradigms) are trying to do the following things:

- **Control** can be standardized. For example: traversing data, searching for data, multi-threading, concurrency, asynchronous, etc., can all be standardized.
- **Control** needs to process data, standardizing **Control** requires standardizing **Data Structure**. We can solve this problem through generic programming.
- **Control** also needs to handle the user's business logic, that is, **Logic**. Therefore, we can achieve this through standardized interfaces/protocols so that our **Control** mode can be adapted to any **Logic**.

## Summary

The essence of programming is:

- `Program = Logic + Control + Data Structure`

Key takeaways:

- All programming methods revolve around **Logic**, **Control**, and **Data Structure**.
- **Logic** and **Control** are more important than **Data Structure**.
- **Control** only affects the efficiency of **Algorithm**. It doesn't change **Logic**.
- The reasons why the program is complex are that:
  - **Logic** (business logic) is complex.
  - **Logic** and **Control** are mixed together.
- Effective separation of **Logic** and **Control** is the key to writing good programs.
