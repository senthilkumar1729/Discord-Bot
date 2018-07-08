

import sys
import praw
import requests




reddit = praw.Reddit('bot1')
def downloadImage(url,filename):
    response=requests.get(url)
    if response.status_code == 200:
        print('Downloading %s...' % (filename))
    if 'gfycat' in url:
        url=url[0:8]+ "giant." + url[8:len(url)] + ".mp4"
        print(url)
        with open("%s.mp4" %filename,'wb')as f:
            for chunk in response.iter_content(4096):
                f.write(chunk)
    if url.lower().endswith('jpg'):
        with open("%s.jpg" %filename,'wb')as f:
            for chunk in response.iter_content(4096):
                f.write(chunk)
    if url.lower().endswith('gif'):
        with open("%s.gif" %filename,'wb')as f:
            for chunk in response.iter_content(4096):
                f.write(chunk)
    if url.lower().endswith('png'):
        with open("%s.png" %filename,'wb')as f:
            for chunk in response.iter_content(4096):
                f.write(chunk)






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

