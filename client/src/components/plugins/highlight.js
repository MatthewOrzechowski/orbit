// Based on: https://github.com/bvaughn/react-highlight.js

'use strict';

import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import highlight from 'highlight.js'

class Highlight extends Component {
  // static propTypes = {
  //   children: PropTypes.node.isRequired,
  //   language: PropTypes.string.isRequired
  // }

  componentDidMount () {
    highlight.initHighlightingOnLoad()
    highlight.highlightBlock(findDOMNode(this))
  }

  componentDidUpdate () {
    // highlight.initHighlighting.called = false
    // highlight.initHighlighting()
  }

  onScroll(evt) {
    if(evt.deltaY > 0 && (this.refs.root.clientHeight + this.refs.root.scrollTop) >= this.refs.root.scrollHeight) {
      evt.stopPropagation();
      evt.preventDefault();
    } else if(evt.deltaY < 0 && this.refs.root.scrollTop === 0) {
      evt.stopPropagation();
      evt.preventDefault();
    }
  }

  render () {
    const { children, language } = this.props

    return (
      <pre ref="root" onWheel={this.onScroll.bind(this)}>
        <code className={language}>
          {children}
        </code>
      </pre>
    )
  }
}

module.exports = Highlight;
