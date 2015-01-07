var marmaid ={
  inline: /^mermaid\n/
};

hexo.markedRenderer = {
  init: function() {
    // Called before rendering a post
  },
  codespan: function(code) {
    if (marmaid.inline.test(code)) {
      return '<div class="mermaid">' + code.replace(marmaid.inline,'') + '</div>'
    }
    // Default method can be accessed via:
    // this._super.heading(text, level)
    return this._super.codespan(code);
  },
  eof: function() {
    // Called after marked finish rendering
    // Returned string will be appended to output HTML
    return '';
  }
}