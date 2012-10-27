# Pianist.js #
**Easy event handling for keypresses**

Trying to trigger events when a key is pressed is a royal pain in the
bum to deal with, and even worse when you want cross-browser
compatibility. Pianist (coz it's good with keys, eh...) provides a
simple interface for binding functionality to keypress events, without
having to faff about with all that.

## Getting started ##
Simply include the script, and then do something like this:

```
var pianist = new Pianist();
pianist.add('?', function(evt, keyPressed) {
  // do something when someone presses '?'
});
```

### Key modifiers ###
You can add events to certain key combinations, too, using a basic
string format:

```
pianist.add('Ctrl+?', function() {
  // do something when someone presses Control and '?'
});
```

You can use `Ctrl` and `Alt` at the moment.

#### What about `Shift`? ####
The keys you bind to are handled in a **case-sensitive** manner, which
means that `Shift` is handled automatically if you use uppercase
characters, or characters that can only be accessed by holding Shift
(like symbols). `Ctrl+?` is technically the same as `Ctrl+Shift+/`,
while arguably making your bindings more semantic at the expense of verbosity.

It's also a browser limitation.

### Removing handlers ###
Suppose you no longer want to listen for a certain keypress event. You
can remove it by simply calling `remove`.

```
pianist.remove('?'); // event handler will no longer be fired
```

### Form elements and contenteditable ###
Events handled by Pianist won't be triggered when the user types in a
form element, or any element with contenteditable set, although in
future versions this will be reworked to be a bit more smart
(ie. allow combos, not single letter bindings).

## License ##

> Copyright (C) 2012 Lee James Machin
>
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> "Software"), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
>
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
> LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
> OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
> WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
