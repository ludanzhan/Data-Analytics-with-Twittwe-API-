import pymongo
import json
import pprint
from pymongo import MongoClient
from bson.json_util import dumps

def get_json():
    conn = 'mongodb://localhost:27017'
    client = pymongo.MongoClient(conn)
    db = client.twitter_db
    tweets= db.tweets.find()
    list_tweets = list(tweets)
    json_data = dumps(list_tweets)
    with open("static/tweet.json", "w") as write_file:
        print(json_data,file=write_file)