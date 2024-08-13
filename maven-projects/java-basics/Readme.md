# Java Notes

## Need to declare variables before using it

- associate a data type to a variable
- Data types:
  - Primitives (keywords)
    - `byte` 1 byte
    - `short` 2 bytes
    - `int` 4 bytes
    - `long` 8 bytes
    - `float` 4 bytes
    - `double` 8 bytes
    - `char` 2 bytes
    - `boolean` 1 bit
  - References (8 bytes)
    - class
    - interface
    - enum
    - record
    - @interface (annotation)

## Programming constructs

- selction: `if-else`, `switch-case`
- iteration (loops): `for`, `while`, `do-while`
- sequence (branching): function calls

## Some rules:

- a class is the minimum building block
- a class is a container for variables (data members) and functions (methods)
  - optionally a class may contain other class definitions
- members may have access modifiers: `public`, `protected`, `private`
  - if none of them are used, that is called `package level`

## Multi-tier architecture

![Multi-tier architecture](./conepts.dio.png)
