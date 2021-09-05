export const observal = {
    next: (val) => console.log('nextValue', val),
    error: (err) => console.error('error', err),
    complete: () => console.log('complete')
}