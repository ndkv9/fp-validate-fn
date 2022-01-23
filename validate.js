const validate = text => {
  const regex = /^.*-s/i

  if (text.length > 10 && text.length <= 30 && regex.test(text)) {
    return true
  }

  return false
}

module.exports = validate
