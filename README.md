# yodletriangle

Monir Mamoun programming exercise based on http://www.yodlecareers.com/programming-puzzle-triangle

Early work in progress. Nothing to see here.

As I was thinking about this problem, the “brute force” approach of trying and summing every possible path from the top down was the most obvious initial approach. And it seemed it would lead to a pretty unwieldy algorithm because it would be impossible to know which paths to keep until the very bottom, because a big value at the bottom could “win” a path. So I thought about it from the bottom up to gain some more insight, and after a few minutes realized there would always be a “winning” sum (and possibly a tie) from each node in the second-to-last row down. And that only the winning sum needed to be stored/associated (so you could "replace" the nodes in the second-to-last row with the winning sum) and the path itself would be irrelevant and not need to be stored at all, because the answer just requires a sum. Then just iterate back up the rows to the top row.

So the approach I propose is to calculate bottom-to-top, reducing the elements on each row (starting summing at the second to last, or at the last row and skipping the summing for that row) to an equivalent number of winning sums, and thus crawl up the tree to the top, until left with one winning sum.
