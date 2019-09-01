# TEST TALK

## Second Attempt

There are several issues here:

1. We end up having many different tests mocking the same data. When we change the data structure tests are still green.
2. It isn't DRY
3. We need to understand many levels deep the dependecies so we can mock what can't be loaded on a test environement.
4. our tests come out very verbose because it has so much setup to do.
