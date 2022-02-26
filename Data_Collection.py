#!/usr/bin/env python
# coding: utf-8

# In[1]:


import requests
import json 
#from bearer_file import bearer_token
import pymongo

client = pymongo.MongoClient('mongodb://localhost:27017')
db = client.twitter_db
collection = db.tweets 

def bearer_oauth(r):
    """
    Method required by bearer token authentication.
    """

    r.headers["Authorization"] = f"Bearer AAAAAAAAAAAAAAAAAAAAACupZAEAAAAAgYUPv3%2FKhNopeBSQO47R5SexlS4%3DsKOro4aO0JMCmxOjDu9P2NJFwUgrluEwtkwIreD964xrWQPUha"
    r.headers["User-Agent"] = "v2UserTweetsPython"
    return r

def get_tweets():
    usernames = "usernames=elonmusk,BarackObama,cristiano,BTS_twt,Wendys,shroud,CDawgVA,charlidamelio,NFL,instagram"
    user_fields = "user.fields=description,created_at"
    
    url = "https://api.twitter.com/2/users/by?{}&{}".format(usernames, user_fields)
    
    id_response = requests.request("GET", url, auth=bearer_oauth,)
    json_response = id_response.json()
    print(id_response.status_code)
    if id_response.status_code != 200:
        raise Exception(
            "Request returned an error: {} {}".format(
                id_response.status_code, id_response.text
            )
        )
    Id_list = []
    person_id_list = []
    for response in json_response['data']:
        account_id = response['id']
        Id_list.append(account_id)
        person_dict = {response['username']: response['id']}
        person_id_list.append(person_dict)
    
    url_list = []
    for account in Id_list:
        user_id = account
        url = "https://api.twitter.com/2/users/{}/tweets".format(user_id)
        url_list.append(url)
    
    response_list = []
    for url in url_list:
        url = url
        params = {"tweet.fields": "public_metrics", "expansions": "author_id", "user.fields":"description", "max_results": 100}
    
    
    
        response = requests.request("GET", url, auth=bearer_oauth, params=params)
        print(response.status_code)
        if response.status_code != 200:
            raise Exception(
                "Request returned an error: {} {}".format(
                    response.status_code, response.text
                )
            )
        tweets = response.json()
        response_list.append(tweets)

    twitter_data = {
        "users": person_id_list,
        "tweets":response_list
    }

    collection.insert_one(twitter_data)

get_tweets()
