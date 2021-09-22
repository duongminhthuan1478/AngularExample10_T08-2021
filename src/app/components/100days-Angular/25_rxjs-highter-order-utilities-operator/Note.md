# Higher-Order observable is subscribe contain subscribe .In simple words, it means nested subscribe
- Consider below example
<pre>
    const ob = fromEvent(document, 'click').pipe(
        map(x => of(`I clicked`))
    )
    /// so want to get value from inner observable
    ob.subscribe(outterOb => {
        outterOb.subscribe(console.log)
        // result = 'I clicked'
    })
</pre>


- Solutions: using concatMap(), switchMap(), mergeMap(), exhaustedMap(). All these operators are called higher-order observables
Note: concatMap = concatAll() + map(), it's same with switchMap...
- The meaning when using these higher-order observables:
- It will convert  subscribe value from  inner and transform to outer so. We don't have to nested subscribe. Consider below instance
<pre>
    const ob = fromEvent(document, 'click').pipe(
      concatMap(x => of(`I clicked`))
    );
    
     ob.subscribe(console.log)
</pre>


# Refer others at:
https://www.youtube.com/watch?v=5SD2YIxMBBM&list=PLVmX3uPQtp3vXOXUOl8gDIA_43_pmIdFN&index=26
https://github.com/angular-vietnam/100-days-of-angular/blob/master/Day025-rxjs-hoo-utility.md
