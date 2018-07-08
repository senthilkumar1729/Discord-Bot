import tweepy
import sys
from textblob import TextBlob 

consumer_key = ''
consumer_secret = ''

labels = []
access_token = ''
access_token_secret = ''

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api=tweepy.API(auth)

TweetName = sys.argv[1]


public_tweets = api.search(TweetName)
ptweets =[]
for tweet in public_tweets:
    #print(tweet.text)
    tw = TextBlob(tweet.text)
    ptweets.append(tw)
    if '/' in tw:
        tw=tw[:tw.find('/')]
    print(tw)
    print('*------------------------------------------------------**')
    print('')
    
      
    
  
    

print(TweetName)
sys.stdout.flush()
