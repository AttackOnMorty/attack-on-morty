---
title: "JS: Instanceof"
date: "2022-07-10"
---

先看个例子：

```JavaScript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// expected output: true
```

**实际上 `instanceof` 是对面向对象语言的拙劣模仿**。它会让你下意识地认为 `instanceof` 的作用是检测 `auto` 是不是由 `Car` 实例化出来的。但是 `JavaScript` 是基于对象的语言，它没有面向对象语言中类和实例的概念。

## instanceof 到底是什么

下面是 [MDN 的定义](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)：

> The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.

语法如下：

```JavaScript
object instanceof constructor
```

**也就是说 `instanceof` 实际上是检测 `constructor.prototype` 是否出现在 `object` 的原型链上。**

## 手写 instanceof

下面是代码实现：

```JavaScript
function _instanceof(obj, constructor) {
    // For primitive types, return false
    if (typeof obj !== 'object' || obj === null) return false;

    let proto = Object.getPrototypeOf(obj);

    while (proto) {
        if (proto === constructor.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }

    return false;
}

```
