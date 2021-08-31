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
- https://rxjs.dev/api/operators/toArray
 