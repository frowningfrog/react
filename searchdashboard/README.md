The difference between event and effect is events are trigged by an action ususally by the user, like a button click.
useEffect is usually for internal changes.
I think you'd avoid useEffect when you can use something else like an event or component.
The dependency array controls when to re-render (if it has changed).
Cleanup is important so there's no memory leaks and slow runtimes.
