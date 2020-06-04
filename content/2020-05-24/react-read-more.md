---
title: Creating a read more component in react
date: 2020-05-24
path: /creating-a-read-more-component-using-react
tags: react, javascript, read-more
image: /images/alberto-bigoni-S25lkmUwTk8-unsplash.jpg
---
> Add a '...read more' text to your long content

---

Here is an example of how the component behaves. I figured rather than writing and trying to figure how this component works, it would be better if I show how this component works.

<iframe
     src="https://codesandbox.io/embed/react-read-more-1-xftnp?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-read-more-1"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Motivation

Truth be told, I was inspired to create this component from LinkedIn. So LinkedIn has this `...show more` UI which shows a small section of a long content initially and when clicked, it shows the complete content.

![LinkedIn show more](/images/linkedin-show-more.png)

## The art of creating it

Truth be told, I had seen how LinkedIn implemented this feature and I absolutely loved it. Their idea was define the `line-height` and then set the `max-height` property on a div, so that only that content is shown. 

When someone clicks on the `...show more` text then show the complete content.

Sounds awesome right? So I did the same thing to implement it.
<br/>
<br/>
The algorithm would be
1. Get the line height
2. Get the unit
3. Show the content with the line height
4. On clicking `show more` show the full content
5. Set the position of `show more` to be absolute so that it can be placed at the last line to the right.

## So what's novel about this approach?

The part I liked most was the insight that if you do not play with the line height, you won't be able to ensure a clean UI. Let us take an example to understand it.

If the line height is `2rem` and you set a height of `7rem` then your last line is bound to get cut off. That looks pretty bad. With the `line-height` set and `height` set to a multiple of `line-height` we do not encounter this issue. 

## Caveats 

As discussed in the previous section `height` should be a multiple of `line-height`. Also if you have padding and margin in your content then again the UI will get mixed up. 

Anyways that's a problem to solve for another day. 

## The code

I don't think sharing code is super important but anyways, here it is.

```tsx
/**
 * @author Bisvarup Mukherjee
 * @date 23/05/2020
 */

import React, { useState, useRef, useEffect } from 'react'

export interface Props {
  /** The component which you want to show an excerpt of. */
  children: React.ReactNode
  /** The default value is '...read more' you may want to change this */
  readMoreText?: React.ReactNode
  /** The line height size, default '1' */
  lineHeight?: number
  /** The height of the excerpt to be shown initially, default '5' */
  height?: number
  /** Unit of line height, by default it is 'rem' */
  unit?: string
  /** Optionally add classes to the read more label, default is '' */
  readMoreClass?: string
  /** Optionally do something on the click of read more, default noop */
  readMoreClick?: (e: Event) => void
  /** Support for styles of read more, default {} */
  readMoreStyles?: { [x: string]: string }
}

/**
 * Wrap any component with this component to show a read more text. On clicking
 * the read more text user will be able to see the full content. On full content
 * is shown it cannot be reverted back.
 *
 * There is also a withReadMore HOC wrapper along with this file. They do the same thing
 * and usage depends on the choice of the user
 */
export default function ReadMore({
  children,
  readMoreText = '...read more',
  lineHeight = 1,
  height = 5,
  unit = 'rem',
  readMoreClass = '',
  readMoreClick = () => {},
  readMoreStyles = {}
}: Props) {
  const [showReadMore, setShowReadMore] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const readMoreRef = useRef<HTMLDivElement>(null)

  const handleReadMoreClick = (e: any) => {
    setShowReadMore(false)
    readMoreClick(e)
  }

  useEffect(() => {
    if (!showReadMore || !containerRef.current || !readMoreRef?.current) return
    const divHeight =
      containerRef?.current?.clientHeight + containerRef?.current?.offsetTop
    const refHeight =
      readMoreRef?.current?.offsetTop + readMoreRef?.current?.clientHeight

    if (refHeight >= divHeight) setShowReadMore(false)
  }, [containerRef, readMoreRef, showReadMore])

  if (!showReadMore) return children

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        lineHeight: `${lineHeight}${unit}`,
        height: `${height}${unit}`
      }}
    >
      <div ref={containerRef}>{children}</div>
      <div
        className={readMoreClass}
        onClick={handleReadMoreClick}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          cursor: 'pointer',
          background: '#fff',
          fontSize: `${lineHeight}${unit}`,
          lineHeight: `${lineHeight}${unit}`,
          ...readMoreStyles
        }}
        ref={readMoreRef}
      >
        {readMoreText}
      </div>
    </div>
  )
}

```

## References

In case you want to find this [npm module](https://www.npmjs.com/package/@bisvarup/react-read-more) or the [github source](https://github.com/bisho1995/react-read-more)
