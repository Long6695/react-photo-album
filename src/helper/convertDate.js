export const convertDate= (string) => {
  const date = new Date(string)
  const time = date.toLocaleString('en-us', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })

  return time
}