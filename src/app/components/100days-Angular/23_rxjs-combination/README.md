# Rxjs-combination have 2 types: first one is 'Join Creation Operators' and another one is 'Join Operators (pipe-able operator, using in pipe)'
- Join Creation Operators: forkJoin(), combineLatest(), zip(), merge(), race(), concat()
- Pipe-able Combination Operatos: withLastestFrom(), startWith(), endWith(), pairwise()


- Compare: combineLatest, withLastestFrom
  + Vì tính chất chỉ emit khi Outer Observable emit nên withLatestFrom() sẽ phù hợp với những nghiệp vụ mà cần lắng nghe 1 Observable (đây là Outer Observable) và cần thêm giá trị gần nhất của 1 Observable khác. Nếu dùng combineLatest() thì mỗi lần Observable khác kia emit, thì combineLatest() cũng emit và đây là điều chúng ta không muốn.
  + # Refer https://nishugoel.medium.com/forkjoin-combinelatest-withlatestfrom-50574d1c21ad


# Refer: https://github.com/angular-vietnam/100-days-of-angular/blob/master/Day023-rxjs-combination.md
# Video: https://www.youtube.com/watch?v=qChj6nScvl0&list=PLVmX3uPQtp3vXOXUOl8gDIA_43_pmIdFN&index=24

Offical document: https://rxjs.dev/api/operators/