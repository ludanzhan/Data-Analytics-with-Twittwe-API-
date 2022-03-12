# Project3 
#### This project is to use twitter’s API to provide an interactive webpage of 10 pre-assigned twitter accounts with evolving visuals. Data Visualizaiton including Python-Flask-powered API, Javascript D3 library and MongoDB database.
- First collecting ten Twitter account information with Twitter API (below code could be find on the Twitter API reference)
  ```python
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
        
    return person_id_list, response_list
  ```
- Inserted data into MongoDB
  ```python
    # Use PyMongo to establish Mongo connection
    client = pymongo.MongoClient('mongodb://localhost:27017')
    db = client.twitter_db
    collection = db.tweets
    # Create an instance of Flask
    app = Flask(__name__)


    # Route to render index.html template using data from Mongo
    @app.route('/')
    def home():
      Data_Collection.get_tweets()
      tweets = collection.find_one()
      create_json.get_json()
      return render_template('index.html', tweets=tweets)

    @app.route('/request')
    def request():
      Data_Collection.get_tweets()
      return redirect('/', code = 302)


    if __name__ == "__main__":
        app.run(debug=True)
  ```
- Pulled the data from MongoDB into a JSON file when the page loads using Flask
  ```python
  conn = 'mongodb://localhost:27017'
  client = pymongo.MongoClient(conn)

  db = client.twitter_db
  tweets= db.tweets.find()
  list_tweets = list(tweets)
  json_data = dumps(list_tweets)
  print(json_data)
  with open("templates/tweet.json", "w") as write_file:
      print(json_data,file=write_file)
  ```
- Uses JavaScript to read the JSON file and create visualizations
  ```python
  d3.json("static/tweet.json").then(function(tweetdata){
      const data = tweetdata;
      let names = data[1].users;
      let values = Object.values(names)
  ```
 ### Website Overview
 ![image](https://github.com/ludanzhan/Project3/blob/main/images/Screen%20Shot%202022-03-12%20at%2011.06.21%20AM.png)
 ![image](https://github.com/ludanzhan/Project3/blob/main/images/Screen%20Shot%202022-03-12%20at%2011.06.35%20AM.png)
 ![image](https://github.com/ludanzhan/Project3/blob/main/images/Screen%20Shot%202022-03-12%20at%2011.06.04%20AM.png)
