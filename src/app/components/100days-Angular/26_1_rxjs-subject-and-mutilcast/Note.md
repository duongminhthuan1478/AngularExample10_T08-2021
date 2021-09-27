- Subject: It was combined from both Observable (we can subscribe) and Observer (control methods error, complete, next)
    + BehaviorSubject: Store lastest to property value. Can get it asynchronous(subscribe after emitted value). Otherwise subject like synchronous subscribe after emiited value can not trigger by subscribe
    + ReplaySubject: Has buffersize parameter to replay/get recent values based on buffersize passed. If pass 3 it will emit 3 recent values when subscribe
    + AsyncSubject: A variant of Subject that only emits a value when it completes. It will emit its latest value to all its observers on completion. If the stream not complete subscribe is not trigger

- Why we have multicast / Tại sao có multicast ?
    # Như chúng ta đã biết, đối với các Observable thông thường, mỗi khi thực hiện subscribe sẽ sinh ra một execution mới, và chúng độc lập với nhau. khi hai observer subscribe vào,chúng sinh ra các execution khác nhau.Câu hỏi đặt ra là có cách nào để bất cứ khi nào có một observer mới nào subscribe vào thì chúng sẽ share cùng một execution không?
    -> Sử dụng multicasting với mong muốn cả hai observer đều chạy cùng một execution

    As we know, common observables, when called a subscribe we have a new execution, each of subscribe is independent. When we have two observer subscribe, it's general two difference execution. So the question is:
    Is any way to share execution when an observer will have a new subscription?

Consider Rxjs, it's have a design pattern called Observable Pattern
![Observable Pattern](https://github.com/angular-vietnam/100-days-of-angular/blob/master/assets/observer-pattern.png)


# Operators for multicast:
- multicast: return ConnectableObservable. Using ConnectableObservable to connect/disconnect share stream (multicast stream)

- refCount: Automatically connect/disconnect multicast: 
    + Example : call connectableObservable.subscribe() refCount is 1 then connect open, connectableObservable.unsubscribe() refcount -1
    if refcount = 0 -> disconect-> Avoid memory leak

- SubjectFactory: If a Subject was completed, we cannot next any value to Subject that is characteristics of observable -> we have SubjectFactory() function
    + SubjectFactory function return new Subject: After completed  we cannot get any value emitted. Using syntax "multicast(() => new Subject())". The new Subject called and change refcount from 0 to 1. Stream run again

- public: short syxtan of SubjectFactory above  "multicast(() => new Subject())" . In version 7, it's deprecated
- share:  multicast(() => new Subject()) + refCount . Similar with public + refcount

- shareReplay: share + ReplaySubject = mlticast(() 
        => multicast(() => new ReplaySubject(BUFFER_SIZE)) + refCount. Similar with shortcut for publishReplay(1).refCount(

# Unicast and multicast
- unicast: giống như bạn vào Youtube, mở video nào đó đã được thu sẵn và xem, nó play từ đầu đến cuối video. Một người khác vào xem, Youtube cũng sẽ phát từ đầu đến cuối như thế, hai người không có liên quan gì về thời gian hiện tại của video mà mình đang xem.
- multicast: cũng là hai người (có thể nhiều hơn) vào xem video ở Youtube, nhưng video đó đang phát Live (theo dõi một show truyền hình, hay một trận bóng đá Live chẳng hạn). Lúc này Youtube sẽ phát video Live, và những người vào xem video đó sẽ có cùng một thời điểm của video đó (cùng thời điểm của trận đấu đang diễn ra chẳng hạn).



- Cold observable: calling subscribe multiple times on the same Observable will cause the source Observable to be re-created over and over again and, hence, perform a request on each subscription. We call this cold Observables. (link detail at refer)

# Refer 
- joke-list using caching with multicast + shareReplay (example of 26_2_multicast-with-caching):
    https://blog.thoughtram.io/angular/2018/03/05/advanced-caching-with-rxjs.html
- cold (common ob) and hot observable(multicast):
    + https://blog.thoughtram.io/angular/2016/06/16/cold-vs-hot-observables.html

- https://github.com/angular-vietnam/100-days-of-angular/blob/master/Day026-rxjs-subject-multicast.md
- 22:40, https://www.youtube.com/watch?v=8nWosjgcI5k&list=PLVmX3uPQtp3vXOXUOl8gDIA_43_pmIdFN&index=33