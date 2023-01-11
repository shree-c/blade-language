const create_html_element = (tag_name, text) => {
  console.log(text)
  return `<${tag_name}>${text}</${tag_name}>`
}

export function to_html(ast) {
  let str = ''
  if (typeof (ast) !== 'object')
    throw new Error('argument should be an object')
  ast.forEach((e) => {
    if (typeof (e) === 'string') {
      str += e
    } else {
      str += create_html_element(e.tag, to_html(e.body))
    }
  })
  return str
}
