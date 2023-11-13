
const useDebounce = (cb, delay = 200) => {
  let timerId
  return ((...args) => {
    clearInterval(timerId)
    timerId = setTimeout(() => {
        cb(...args)
    }, delay)
  })
}

export default useDebounce