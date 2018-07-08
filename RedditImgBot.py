

import sys
import praw
import requests




subs=sys.argv[1]


subs=str(subs)
print(subs)
subreddit=reddit.subreddit(subs)



for submission in subreddit.hot(limit=10):
    print("Title: ",(submission.title))
    print("\nURL: ",submission.url)
    print("\n\n")
    name=submission.title
    

            
sys.stdout.flush()

