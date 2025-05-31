# Importing Tweepy
import tweepy

# Credentials
api_key = "3wBuVxFLNL9p2wSxBSNEEcybShdvFiWUWCeYoUOXtMvdg"
api_secret = "OeajjBkNVaIZvFKrxuxC65b1SK2riAEWwGMJ47FYDogGiaW309"
bearer_token = r"AAAAAAAAAAAAAAAAAAAAAOyUuQEAAAAAGbXPrTILf5iAhOyBVx2gqUZRu7Y%3Drbb9ReNnu33IKpObXt0Fj6dhK1khWHyP8rj48O8vIdRa9gCMiU"
access_token = "79458560-ywxMtFguip2jHbmaaopPNgkUNmCROSfUfQFo8PuhO"
access_token_secret = "XpnhsX4da5hEe1sJfj4ey9RcswYdBAPnTTmA6sGN8uYr5"

# Gainaing access and connecting to Twitter API using Credentials
client = tweepy.Client(bearer_token, api_key, api_secret, access_token, access_token_secret)

# Creating API instance. This is so we still have access to Twitter API V1 features
auth = tweepy.OAuth1UserHandler(api_key, api_secret, access_token, access_token_secret)
api = tweepy.API(auth)

# Creating a tweet to test the bot
client.create_tweet(text="Hello World")