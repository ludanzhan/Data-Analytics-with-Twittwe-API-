d3.json("../tweet.json").then(function(tweetdata){
    const data = tweetdata;
    let names = data[0];
    let values = Object.values(names)
    // grab the dropdown menu
    const selectBox = d3.select("#selDataset");
        
    // adding ids to the dropdown menu
    for(let i =0; i< names.length; i++){
        selectBox.append("option").text(Object.keys(values[i]));
        //console.log(Object.keys(values[i]));
    }

    updateinfo(0)

    function updateinfo(id){
        let info = data[1][id].data

        // extract info for each user
        let likeCount = 0
        for(let i = 0 ; i < info.length; i++){
            likeCount = likeCount + info[i].public_metrics.like_count
        }

        let quoteCount = 0
        for(let i = 0 ; i < info.length; i++){
            quoteCount =  quoteCount + info[i].public_metrics.quote_count
        }

        let replyCount = 0
        for(let i = 0 ; i < info.length; i++){
            replyCount =  replyCount + info[i].public_metrics.reply_count
        }

        let retweetCount = 0
        for(let i = 0 ; i < info.length; i++){
            retweetCount =  retweetCount + info[i].public_metrics.retweet_count
        }
    
        console.log(info[1])

        //create barchart
        let barTrace = {
            x: ["Average Like Count","Average Quote Count","Average Reply Count","Average Retweet Count"],
            y: [likeCount, quoteCount, replyCount, retweetCount],
            type: 'bar'
        }

        let layout = {
            width: 550,
            height: 550
        };

        let traceData = [barTrace];
        Plotly.newPlot("bar", traceData, layout);
        

        // update info panel
        let sample_metadata = d3.select("#sample-metadata");
    
        sample_metadata.html("");
        sample_metadata.append("li").text("Average Like Count: " + likeCount/100);
        sample_metadata.append("li").text("Average Quote Count: " + quoteCount/100);
        sample_metadata.append("li").text("Average Reply Count: " + replyCount/100);
        sample_metadata.append("li").text("Average Retweet Count: " + retweetCount/100);
    }

    d3.selectAll("#selDataset").on("change", updateData);

    function updateData(){
        let dropdownMenu = d3.select("#selDataset");
        // Assign the value of the dropdown menu option to a variable
        let dataset = dropdownMenu.property("value");
        console.log("value", dataset);
        console.log(Object.keys(Object.values(data[0])[1])[0]);

        for(let i =0; i< data[0].length; i++){
            if(dataset === Object.keys(Object.values(data[0])[i])[0]){
                updateinfo(i);
            }
        }
    }
});