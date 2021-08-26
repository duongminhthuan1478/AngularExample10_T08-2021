# Pipe cannot detect element change when it's object or array because it's same reference addreess
# Có 2 cách để khắc phục: dùng pure trong pipe hoặc trực tiếp gán lại object references
- 1: dùng pure: https://angular.io/guide/pipes#detecting-pure-changes-to-primitives-and-object-references
- 2: Sử dụng operator và gán lại như sau book = [...book, {new object}]
