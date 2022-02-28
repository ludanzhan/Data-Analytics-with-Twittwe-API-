from flask import Flask, render_template, redirect
from flask import url_for
import pymongo
import Data_Collection
import create_json

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