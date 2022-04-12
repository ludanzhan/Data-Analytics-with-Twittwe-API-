# Project3 
## Objective 
This project is to use twitter’s API to provide an interactive webpage of 10 pre-assigned twitter accounts with evolving visuals. Data Visualizaiton including Python-Flask-powered API, Javascript D3 library and MongoDB database.

## Tools/Packages Used
- Javascript **d3** library
- HTML
- Boostrap 
- MongoDB
- Flask
- Jupyter Notebook

## Analyze Process
- Retrieving information with Twitter API with Twitter's getTweet() function (Reference in Twitter API website)
- Inserted data into MongoDB with Flask application
- Generate json files 
- Uses JavaScript to read the JSON file and create visualizations
  ```python
  d3.json("static/tweet.json").then(function(tweetdata){
      const data = tweetdata;
      let names = data[1].users;
      let values = Object.values(names)
  ```
 ### Final Results
 ![image](https://github.com/ludanzhan/Project3/blob/main/images/Screen%20Shot%202022-03-12%20at%2011.06.21%20AM.png)
 ![image](https://github.com/ludanzhan/Project3/blob/main/images/Screen%20Shot%202022-03-12%20at%2011.06.35%20AM.png)
 ![image](https://github.com/ludanzhan/Project3/blob/main/images/Screen%20Shot%202022-03-12%20at%2011.06.04%20AM.png)
