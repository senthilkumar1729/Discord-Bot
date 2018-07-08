import tweepy
import sys
from textblob import TextBlob 

consumer_key = '71VOI1gIAl2GsQjUWExMmf6qn'
consumer_secret = 'XZE4ONbBYiWUKW8xki7NyATXhQVUVCrOtZVZiOrsjdElEaU7UT'

labels = []
access_token = '1014110060341952513-nfwnM8Z7I7fRHno7yn8JrM817bFQHi'
access_token_secret = 'YMI6XMIiiKjwqYNVIYwsnmtaxmsKzuY4rN3OhpnBOhROK'

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api=tweepy.API(auth)

TweetName = sys.argv[1]
#TweetName = 'pewdiepie'

public_tweets = api.search(TweetName)
ptweets =[]
for tweet in public_tweets:
    #print(tweet.text)
    anal = TextBlob(tweet.text)
    ptweets.append(anal)
    if '/' in anal:
        anal=anal[:anal.find('/')]
    print(anal)
    print('*------------------------------------------------------**********************************')
    print('')
    
    
    if anal.sentiment.polarity > 0.3:
        t = 'positive'
    elif anal.sentiment.polarity  < 0.4:
        t = 'negative'
    
  
    labels.append([tweet.text,t])


print(TweetName)
sys.stdout.flush()
