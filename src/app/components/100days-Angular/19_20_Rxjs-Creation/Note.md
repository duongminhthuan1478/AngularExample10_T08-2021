 -- Refer doucument
 
 #  https://github.com/angular-vietnam/100-days-of-angular/blob/master/Day019-intro-rxjs-observable.md
 #  https://github.com/angular-vietnam/100-days-of-angular/blob/master/Day020-rxjs-creation.md
 #  https://www.youtube.com/watch?v=lRfyUh4ex38&list=PLVmX3uPQtp3vXOXUOl8gDIA_43_pmIdFN&index=19
 #  https://www.youtube.com/watch?v=OWvK8ZB_Wrc&list=PLVmX3uPQtp3vXOXUOl8gDIA_43_pmIdFN&index=23

# Observer : là một tập hợp các callbacks tương ứng cho việc lắng nghe các giá trị (next, error, hay complete) được gửi đến  bởi Observable.
# Subscription: kết quả có được sau khi thực hiện một Observable, nó thường dùng cho việc hủy việc tiếp tục xử lý.
# Operators: là các pure functions cho phép lập trình functional với Observable.
# Subject: để thực hiện việc gửi dữ liệu đến nhiều Observers (multicasting).
# Schedulers: Một scheduler sẽ điều khiển khi nào một subscription bắt đầu thực thi, và khi nào sẽ gửi tín hiệu đi.