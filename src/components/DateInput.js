function DateInput(props) {
  return (
    <form onSubmit={props.changeDate}>
      Enter a date(YYYY-MM-DD)
      <input />
      <input type="submit" />
    </form>
  )
}
export default DateInput
