d3.json("../tweet.json").then(function(tweetdata){
    const data = tweetdata;
    let names = data[0];
    let values = Object.values(names)
    // grab the dropdown menu
    const selectBox = d3.select("#selDataset");
        
    // adding ids to the dropdown menu
    for(let i =0; i< names.length; i++){
        selectBox.append("option").text(Object.keys(values[i]));
        console.log(Object.keys(values[i]));
    }
    let info = data[1][1].data
    console.log(Object.values(info[1].public_metrics))
    
   updatechart[1]

    function updatechart(id){
        let info = data[1][id].data;
        let keys = Object.keys(info[1].public_metrics)
        let values = Object.values(info[1].public_metrics)
        let sample_metadata = d3.select("#sample-metadata");

        sample_metadata.html("");

        for(let i =0; i< keys.length; i++){
            sample_metadata.append("p").text(keys[i] + ": " + values[i]);
        }  
    }
});