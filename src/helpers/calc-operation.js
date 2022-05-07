
export function operate(numberOne, numberTwo, operation) {
  const one = numberOne || "0"
  const two = numberTwo
  if (operation === "+") {
    return (Number(two) + Number(one)).toString()
  }
  if (operation === "-") {
    return (Number(two) - Number(one)).toString()
  }
  if (operation === "*") {
    return (+one * +two).toString()
  }
  if (operation === "\\") {
    if (two === "0") {
      return "0"
    } else {
      return (+two / +one).toString()
    }}

  return ''
}
