import classNames from 'classnames'
import React from 'react'

function RenderHtmlContent({content, classes}:any) {
  return (
    <>
     { content ? (  <div
     className={classNames('html-text [&>p]:whitespace-normal', classes)}
      dangerouslySetInnerHTML={{
        __html: content,
      }}/>): null}
    </>
  
  )
} 

export default RenderHtmlContent
