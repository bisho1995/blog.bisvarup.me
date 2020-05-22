---
title: The snackbar component
date: 2020-05-20
path: /the-snackbar-component
---

# The snackbar component

So for your app, you need a good old snackbar component. How difficult can it be? This was my initial thought as well.
Let's find out 🙄

*__A note of caution:__ I was trying to find a quick solution for this, as another team was already developing the snackbar component.*

---

## The hidden PRD

At the initial thought a snackbar is a simple component which shows a perhaps white text text on black background on a strap. What we don't see is

1. Auto-hide after `t` seconds
2. Animate and bring up
3. Animate and hide down
4. Animation speed (going should be faster - as it would then seem as if the UI is snappy)
5. Trigger the snackbar from **redux store** maybe?

... and many more

I decided to support
1. Auto-hide after 3 seconds
2. Changeable text (duh)
3. Triggerable from redux store

## Triggering from redux store

I felt this was the challenging part, as redux is going to trigger an UI change. I did not want to create a state in the store to do this. 

My approach was using [context api](https://reactjs.org/docs/context.html)

Here is my snackbar component

`embed:snippets/snackbar/snackbar.tsx`

## Context API

We can use the context API like

`embed:snippets/snackbar/sample-context.jsx`

Now, I feel this is a bit too verbose and at the call site things should be a bit simplified. 

So, lets use a HOC component for this.

Introducing withSnackBarHOC

`embed:snippets/snackbar/withSnackBarHOC.tsx`

Now, at the root component you can wrap the default export with this wrapper.

`embed:snippets/snackbar/withSnackBarWrapper.tsx`

Now at the call site where you are using redux, you can grab the `showSnackBar` function like this

`embed:snippets/snackbar/showSnackBarUsage.tsx`

Now pass the `this.showSnackBar` to redux method, while calling.

OK OK, I get it, this seems a long process as well. I just realized this while writing and explaining.

But, on the other-hand this is indeed simpler than managing in redux state.

