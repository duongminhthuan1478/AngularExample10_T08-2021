# map() js and map() rxjs pipe:
- map array: sẽ xử lý từng phần tử một
- map rxjs pipe: Nếu thằng parent (thường là Observabel hoặc là map parent goi map khác) 
truyền xuống một [] thì value trong map sẽ nhận là một [], để value nhận được từng phần tử thì nên sử dụng from() để tạo Observable thay vì of() 

# reduce & scan in rxjs pipe
- scan: still calculated even though Observable no complete (scan will be calculated each next value is passed)
- reduce: neeed Observable comple to execute.

# Operators:  map(), reduce(), toArray(), mapTo(), buffer() - bufferTime()
# Refer: 
- https://github.com/angular-vietnam/100-days-of-angular/blob/master/Day021-rxjs-transformation.md
- https://www.youtube.com/watch?v=AG97A7_NCLE&list=PLVmX3uPQtp3vXOXUOl8gDIA_43_pmIdFN&index=21
- https://rxjs.dev/api/operators/toArray


# Note: Every Subject is an Observable, Every Subject is an Observer 
# / Subject vừa là một Observable vừa là một Observale, vậy nên dùng BehaviorSubject chúng ta có thể dễ dàng chuyển sang Observable bởi asObservable(), và cũng có thể dùng next, complete, error của object Observer
-  BehaviorSubject, ReplaySubject, AsyncSubject extends from Subject
- Refer https://rxjs.dev/guide/subject


### Offical document Transform Operators: https://rxjs.dev/guide/operators#transformation-operators

 