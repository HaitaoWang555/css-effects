import hljs from 'highlight.js/lib/core'
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))

if (!hljs) {
  throw new Error('you should npm install `highlight.js` --save at first ')
}
export default {
  bind(el, binding) {
    const targets = el.querySelectorAll('code')
    let target
    let i

    for (i = 0; i < targets.length; i += 1) {
      target = targets[i]

      if (typeof binding.value === 'string') {
        // if a value is directly assigned to the directive, use this
        // instead of the element content.
        target.textContent = binding.value
      }

      hljs.highlightBlock(target)
    }
  },
  componentUpdated(el, binding) {
    // after an update, re-fill the content and then highlight
    const targets = el.querySelectorAll('code')
    let target
    let i

    for (i = 0; i < targets.length; i += 1) {
      target = targets[i]
      if (typeof binding.value === 'string') {
        target.textContent = binding.value
        hljs.highlightBlock(target)
      }
    }
  },
}
