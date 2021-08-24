
# Note: Về service khi tạo ra có thể là @Injectable() hoặc @Injectable({...})
@Injectable({
  providedIn: "root"
}) 

# providedIn: có 3 parameters là : root, any, platform
 + 'root': có nghĩa là xuyên suốt toàn bộ app sẽ chỉ dùng đúng 1 cái instance (new - khởi tạo) của service, instance giống nhau.
 + 'any' : Eagerly load module thì chung 1 instance. Nhưng, mỗi khi một lazy load module được khởi chạy, thì nó sẽ có một instance mới, những instance này khác nhau. 
 + 'platform': dùng khi có nhiều app frontend khác nhau... value này ít khi sử dụng


# @Injectable(): Nếu không có khai báo key providedIn trong @Injectable thì ta phải tự Inject service vào các module cần dùng tại providers:
- Bạn có thể cung cấp injectors với providers ở nhiều levels khác nhau trong app, bằng một trong ba cách sau:
    + Trong @Injectable() decorator cho service đó.
    + Trong @NgModule() decorator (providers array) đối với NgModule.
    + Trong @Component() decorator (providers array) đối với component hoặc directive (Chúng ta sẽ tìm hiểu chi tiết về Directive sau).

# Refer: https://github.com/angular-vietnam/100-days-of-angular/blob/master/Day015-introduction-dependency-injection-in-angular.md
# https://github.com/angular-vietnam/100-days-of-angular/blob/master/Day016-dependency-injection-in-angular-part-2.md
# https://www.tiepphan.com/thu-nghiem-voi-angular-dependency-injection-trong-angular/

