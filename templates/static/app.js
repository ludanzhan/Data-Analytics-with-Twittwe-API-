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

    // default chart
    updateinfo(0)
   //<!---------------------Collecting count information -------------------------------------->
    // collect elon mask info
    let elonInfo = data[1][0].data;
    let elonLike = 0
    for(let i = 0 ; i < elonInfo.length; i++){
        elonLike = elonLike + elonInfo[i].public_metrics.like_count
    }

    let elonQuote = 0
    for(let i = 0 ; i < elonInfo.length; i++){
        elonQuote =  elonQuote + elonInfo[i].public_metrics.quote_count
    }

    let elonReply = 0
    for(let i = 0 ; i < elonInfo.length; i++){
        elonReply =  elonReply+ elonInfo[i].public_metrics.reply_count
    }

    let elonRetweet = 0
    for(let i = 0 ; i < elonInfo.length; i++){
        elonRetweet =  elonRetweet + elonInfo[i].public_metrics.retweet_count
    }
    
    // collect obama info
    let obamaInfo = data[1][1].data;
    let obamaLike = 0
    for(let i = 0 ; i < obamaInfo.length; i++){
        obamaLike = obamaLike + obamaInfo[i].public_metrics.like_count
    }

    let obamaQuote = 0
    for(let i = 0 ; i < obamaInfo.length; i++){
        obamaQuote  =  obamaQuote + obamaInfo[i].public_metrics.quote_count
    }

    let obamaReply = 0
    for(let i = 0 ; i < obamaInfo.length; i++){
        obamaReply =   obamaReply + obamaInfo[i].public_metrics.reply_count
    }

    let obamaRetweet = 0
    for(let i = 0 ; i < obamaInfo.length; i++){
        obamaRetweet =  obamaRetweet + obamaInfo[i].public_metrics.retweet_count
    }

   // collect cristiano info
    let cristianoInfo = data[1][2].data;
    let cristianoLike = 0
    for(let i = 0 ; i < cristianoInfo.length; i++){
        cristianoLike = cristianoLike + cristianoInfo[i].public_metrics.like_count
    }

    let cristianoQuote = 0
    for(let i = 0 ; i < cristianoInfo.length; i++){
        cristianoQuote  =  cristianoQuote + cristianoInfo[i].public_metrics.quote_count
    }

    let cristianoReply = 0
    for(let i = 0 ; i < cristianoInfo.length; i++){
        cristianoReply =   cristianoReply + cristianoInfo[i].public_metrics.reply_count
    }

    let cristianoRetweet = 0
    for(let i = 0 ; i < cristianoInfo.length; i++){
        cristianoRetweet =  cristianoRetweet + cristianoInfo[i].public_metrics.retweet_count
    }

    // collect bts info
    let btsInfo = data[1][3].data;
    let btsLike = 0
    for(let i = 0 ; i < btsInfo.length; i++){
        btsLike = btsLike + btsInfo[i].public_metrics.like_count
    }

    let btsQuote = 0
    for(let i = 0 ; i < btsInfo.length; i++){
        btsQuote  =  btsQuote + btsInfo[i].public_metrics.quote_count
    }

    let btsReply = 0
    for(let i = 0 ; i < btsInfo.length; i++){
        btsReply =   btsReply + btsInfo[i].public_metrics.reply_count
    }

    let btsRetweet = 0
    for(let i = 0 ; i < btsInfo.length; i++){
        btsRetweet =  btsRetweet + btsInfo[i].public_metrics.retweet_count
    }

    // collect wendy info
    let wendyInfo = data[1][4].data;
    let wendyLike = 0
    for(let i = 0 ; i < wendyInfo.length; i++){
        wendyLike = wendyLike + wendyInfo[i].public_metrics.like_count
    }

    let wendyQuote = 0
    for(let i = 0 ; i < wendyInfo.length; i++){
        wendyQuote  =  wendyQuote + wendyInfo[i].public_metrics.quote_count
    }

    let wendyReply = 0
    for(let i = 0 ; i < wendyInfo.length; i++){
        wendyReply =   wendyReply + wendyInfo[i].public_metrics.reply_count
    }

    let wendyRetweet = 0
    for(let i = 0 ; i < wendyInfo.length; i++){
        wendyRetweet =  wendyRetweet + wendyInfo[i].public_metrics.retweet_count
    }

    // collect shroud info
    let shroudInfo = data[1][5].data;
    let shroudLike = 0
    for(let i = 0 ; i < shroudInfo.length; i++){
        shroudLike = shroudLike + shroudInfo[i].public_metrics.like_count
    }

    let shroudQuote = 0
    for(let i = 0 ; i < shroudInfo.length; i++){
        shroudQuote  =  shroudQuote + shroudInfo[i].public_metrics.quote_count
    }

    let shroudReply = 0
    for(let i = 0 ; i < shroudInfo.length; i++){
        shroudReply =   shroudReply + shroudInfo[i].public_metrics.reply_count
    }

    let shroudRetweet = 0
    for(let i = 0 ; i < shroudInfo.length; i++){
        shroudRetweet =  shroudRetweet + shroudInfo[i].public_metrics.retweet_count
    }

     // collect CDawgVA info
     let CDawgVAInfo = data[1][6].data;
     let CDawgVALike = 0
     for(let i = 0 ; i < CDawgVAInfo.length; i++){
        CDawgVALike = CDawgVALike + CDawgVAInfo[i].public_metrics.like_count
     }
 
     let CDawgVAQuote = 0
     for(let i = 0 ; i < CDawgVAInfo.length; i++){
        CDawgVAQuote  = CDawgVAQuote + CDawgVAInfo[i].public_metrics.quote_count
     }
 
     let CDawgVAReply = 0
     for(let i = 0 ; i < CDawgVAInfo.length; i++){
        CDawgVAReply =   CDawgVAReply + CDawgVAInfo[i].public_metrics.reply_count
     }
 
     let CDawgVARetweet = 0
     for(let i = 0 ; i < CDawgVAInfo.length; i++){
        CDawgVARetweet =  CDawgVARetweet + CDawgVAInfo[i].public_metrics.retweet_count
     }

    // collect charliedamelio info
    let charliInfo = data[1][7].data;
    let charliLike = 0
    for(let i = 0 ; i < charliInfo.length; i++){
        charliLike = charliLike + charliInfo[i].public_metrics.like_count
    }

    let charliQuote = 0
    for(let i = 0 ; i < charliInfo.length; i++){
        charliQuote  = charliQuote + charliInfo[i].public_metrics.quote_count
    }

    let charliReply = 0
    for(let i = 0 ; i <charliInfo.length; i++){
        charliReply =   charliReply + charliInfo[i].public_metrics.reply_count
    }

    let charliRetweet = 0
    for(let i = 0 ; i < charliInfo.length; i++){
        charliRetweet =  charliRetweet + charliInfo[i].public_metrics.retweet_count
    }

    // collect nfl info
    let nflInfo = data[1][8].data;
    let nflLike = 0
    for(let i = 0 ; i < nflInfo.length; i++){
        nflLike = nflLike + nflInfo[i].public_metrics.like_count
    }

    let nflQuote = 0
    for(let i = 0 ; i < nflInfo.length; i++){
        nflQuote  = nflQuote + nflInfo[i].public_metrics.quote_count
    }

    let nflReply = 0
    for(let i = 0 ; i <nflInfo.length; i++){
        nflReply =   nflReply +nflInfo[i].public_metrics.reply_count
    }

    let nflRetweet = 0
    for(let i = 0 ; i < nflInfo.length; i++){
        nflRetweet =  nflRetweet + nflInfo[i].public_metrics.retweet_count
    }

    // collect instagram info
    let instagramInfo = data[1][9].data;
    let instagramLike = 0
    for(let i = 0 ; i < instagramInfo.length; i++){
        instagramLike = instagramLike + instagramInfo[i].public_metrics.like_count
    }

    let instagramQuote = 0
    for(let i = 0 ; i < instagramInfo.length; i++){
        instagramQuote  = instagramQuote + instagramInfo[i].public_metrics.quote_count
    }

    let instagramReply = 0
    for(let i = 0 ; i <instagramInfo.length; i++){
        instagramReply =   instagramReply +instagramInfo[i].public_metrics.reply_count
    }

    let instagramRetweet = 0
    for(let i = 0 ; i < instagramInfo.length; i++){
        instagramRetweet =  instagramRetweet + nflInfo[i].public_metrics.retweet_count
    }

    //<!---------------------Create Chart ----------------------------------------------->

     //create scatter plot
        var scatterTrace1 = {
            x: [  obamaLike/100, wendyLike/100, shroudLike/100, CDawgVALike/100, charliLike/100, nflLike/100, instagramLike/100],
            y: [  obamaRetweet/100, wendyRetweet/100, shroudRetweet/100, CDawgVARetweet/100, charliRetweet/100, nflRetweet/100, instagramRetweet/100],
            mode: 'markers+text',
            marker: {
                size: 20
              },
            text: ['Barack Obama','wendy', 'shroud', 'CDawgVA','Charli Damelio','NFL','instagram'],
            textposition: 'top center',
            name: 'Retweet Counts',
            type: 'scatter'
          };
          
        let scatterLayout = {    
            showlegend: true,
            xaxis: {title:'Like Counts'},

            height: 700,
            width: 1200
        };
          var scatterTrace2 = {
            x: [  obamaLike/100, wendyLike/100, shroudLike/100, CDawgVALike/100, charliLike/100, nflLike/100, instagramLike/100],
            y: [  obamaQuote/100, wendyQuote/100, shroudQuote/100, CDawgVAQuote/100, charliQuote/100, nflQuote/100, instagramQuote/100],
            marker: {
                size: 20
              },
            text: ['Barack Obama','wendy', 'shroud', 'CDawgVA','Charli Damelio','NFL','instagram'],
            textposition: 'top center',
            name: 'Quote Counts',
            
            mode: 'markers+text',           
            type: 'scatter'
          };
        

          var scatterTrace3 = {
            x: [  obamaLike/100, wendyLike/100, shroudLike/100, CDawgVALike/100, charliLike/100, nflLike/100, instagramLike/100],
            y: [  obamaReply/100, wendyReply/100, shroudReply/100, CDawgVAReply/100, charliReply/100, nflReply/100, instagramReply/100],
            marker: {
                size: 20
              },
            text: ['Barack Obama','wendy', 'shroud', 'CDawgVA','Charli Damelio','NFL','instagram'],
            textposition: 'top center',
            name: 'Reply Counts',
            mode: 'markers+text',           
            type: 'scatter'
          };
        //   var trace3 = {
        //     x: [1, 2, 3, 4],
        //     y: [12, 9, 15, 12],
        //     mode: 'lines+markers',
        //     type: 'scatter'
        //   };
          
        var scatterData = [scatterTrace1, scatterTrace2,scatterTrace3];
          
          Plotly.newPlot('scatter', scatterData, scatterLayout,{displaylogo: false});
        
     // create bubble chart
     let bubbleTrace = {
        x : [ "Barack Obama", "Wendys", "Shroud", "CDawgVA", "Charli Damelio", "NFL", "Instagram"],
        y : [obamaRetweet/100, wendyRetweet/100, shroudRetweet/100, CDawgVARetweet/100, charliRetweet/100, nflRetweet/100, instagramRetweet/100],
        mode: 'markers',
        marker:{
            size: [obamaRetweet/100, wendyRetweet/100, shroudRetweet/100, CDawgVARetweet/100, charliRetweet/100, nflRetweet/100, instagramRetweet/100],
            color: [ 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)',
                    'rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)']
        }
    }

    console.log("obama",obamaLike/100)

    let bubbleLayout = {    
        showlegend: true,
        xaxis: {title:'Twitter user name'},
        yaxis: {title:'Average Quote Count'},
        height: 850,
        width: 1400
    };

    let bubbleData = [bubbleTrace];

    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    //<!---------------------Comparison bar chart -------------------------------------->

    // create like count comparison bar chart
    let bar = {
        x: [ "Barack Obama", "Cristiano", "BTS"],
        y: [obamaLike/100, cristianoLike/100, btsLike/100],
        type: 'bar'
    }

    let layout = {
        xaxis: {title:'Twitter user name'},
        yaxis: {title:'Average Like Count'},
        width: 700,
        height: 550
    };

    let trace = [bar];
    Plotly.newPlot("likebar2", trace, layout);

    let bar3 = {
        x: [ "Wendys", "Shroud", "CDawgVA", "Charli Damelio", "NFL", "Instagram"],
        y: [wendyLike/100, shroudLike/100, CDawgVALike/100, charliLike/100, nflLike/100, instagramLike/100],
        type: 'bar'
    }

    let layout3 = {
        xaxis: {title:'Twitter user name'},
        yaxis: {title:'Average Like Count'},
        width: 700,
        height: 550
    };

    let trace3 = [bar3];
    Plotly.newPlot("likebar3", trace3, layout3);

    //--------create reply count comparison bar chart--------------------------------------------------------------------------

    let replybar1 = {
        x: [ "Barack Obama", "Cristiano", "BTS"],
        y: [obamaReply/100, cristianoReply/100, btsReply/100],
        type: 'bar'
    }

    let replylayout1 = {
        xaxis: {title:'Twitter user name'},
        yaxis: {title:'Average Reply Count'},
        width: 700,
        height: 550
    };

    let replytrace1 = [replybar1];
    Plotly.newPlot("relybar1", replytrace1, replylayout1 );

    let replybar2 = {
        x: [ "Barack Obama","Wendys", "Shroud", "CDawgVA", "Charli Damelio", "NFL", "Instagram"],
        y: [obamaReply/100,wendyReply/100, shroudReply/100, CDawgVAReply/100, charliReply/100, nflReply/100, instagramReply/100],
        type: 'bar'
    }

    let replylayout2 = {
        xaxis: {title:'Twitter user name'},
        yaxis: {title:'Average Reply Count'},
        width: 700,
        height: 550
    };

    let replytrace2 = [replybar2];
    Plotly.newPlot("replybar2", replytrace2, replylayout2);
   
    //------------------create retweet count comparison bar chart----------------------------------------------------------------
    let retweetbar1 = {
        x: [ "Barack Obama", "Cristiano", "BTS"],
        y: [obamaRetweet/100, cristianoRetweet/100, btsRetweet/100],
        type: 'bar'
    }

    let retweetlayout1 = {
        xaxis: {title:'Twitter user name'},
        yaxis: {title:'Average Retweet Count'},
        width: 700,
        height: 550
    };

    let retweettrace1 = [retweetbar1];
    Plotly.newPlot("retweetbar1", retweettrace1, retweetlayout1 );

    let retweetbar2 = {
        x: [ "Barack Obama","Wendys", "Shroud", "CDawgVA", "Charli Damelio", "NFL", "Instagram"],
        y: [obamaRetweet/100,wendyRetweet/100, shroudRetweet/100, CDawgVARetweet/100, charliRetweet/100, nflRetweet/100, instagramRetweet/100],
        type: 'bar'
    }

    let retweetlayout2 = {
        xaxis: {title:'Twitter user name'},
        yaxis: {title:'Average Reply Count'},
        width: 700,
        height: 550
    };

    let retweettrace2 = [retweetbar2 ];
    Plotly.newPlot("retweetbar2", retweettrace2, retweetlayout2);

     //------------------create quote count comparison bar chart----------------------------------------------------------------
     let quotebar1 = {
        x: [ "Barack Obama", "Cristiano", "BTS"],
        y: [obamaQuote/100, cristianoQuote/100, btsQuote/100],
        type: 'bar'
    }

    let quotelayout1 = {
        xaxis: {title:'Twitter user name'},
        yaxis: {title:'Average Retweet Count'},
        width: 700,
        height: 550
    };

    let quotetrace1 = [quotebar1];
    Plotly.newPlot("quotebar1", quotetrace1, quotelayout1);

    let quotebar2 = {
        x: [ "Barack Obama","Wendys", "Shroud", "CDawgVA", "Charli Damelio", "NFL", "Instagram"],
        y: [obamaQuote/100,wendyQuote/100, shroudQuote/100, CDawgVAQuote/100, charliQuote/100, nflQuote/100, instagramQuote/100],
        type: 'bar'
    }

    let quotelayout2 = {
        xaxis: {title:'Twitter user name'},
        yaxis: {title:'Average Reply Count'},
        width: 700,
        height: 550
    };

    let quotetrace2 = [quotebar2 ];
    Plotly.newPlot("quotebar2",  quotetrace2, quotelayout2);



     // function to update panel info
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
            y: [likeCount/100, quoteCount/100, replyCount/100, retweetCount/100],
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

d3.json("../tweet.json").then(function(tweetdata){
    const data = tweetdata;
    let names = data[0];
    let tweets=data[1];
    console.log(tweets);
    let values = Object.values(names);
    // grab the dropdown menu
    const selectBox2 = d3.select("#selDataset2");
        
    // adding ids to the dropdown menu
    for(let i =0; i< names.length; i++){
        selectBox2.append("option").text(Object.keys(values[i]));
        //console.log(Object.keys(values[i]));
};
// let elone = data[1][0].data;
// let likecountsArray=[];

// for(let j = 0 ; ij< 10; j++){

//    likecountsArray.push (data[1][j].data);
//    let likeCounts=[];
//    for(let i = 0 ; i <100; i++){
//              likeCounts.push([i].public_metrics.like_count) 
//          };
//    console.log(likeCounts);




// };
let obamaInfo = data[1][1].data;

    console.log(obamaInfo);
    let likeCounts=[];
    for(let i = 0 ; i < obamaInfo.length; i++){
              likeCounts.push(obamaInfo[i].public_metrics.like_count) 
          };
    console.log(likeCounts);

    let A=[];
    let B=[];
    let C=[];
    let D=[];
    let E=[];
    let F=[];


    for(let i = 0 ; i < likeCounts.length; i++){

        let counts=likeCounts[i];
        if (counts>5000){A++};
        if (counts>10000){B++};
        if (counts>20000){C++};
        if (counts>40000){D++};
        if (counts>80000){E++};
        if (counts>160000){F++}
    };

    console.log(A);
    console.log(B);
    console.log(C);
    console.log(D);
    console.log(E);
    console.log(F);

// let selectedID=names.filter(namesObj => namesObj.key == selectedSample);
// let selectedData=tweets.filter(tweetsObj=>tweetsObj.)
//     console.log(data[1]);

//  //default chart
//     pieChart(0)
//  //<!---------------------Collecting count information -------------------------------------->
//   // collect elon mask info

//   function pieChart(selectedSample){

//       let likeCount=[];

//       let selectedInfo = data[1][0].data;
//   let elonLike = 0
//   for(let i = 0 ; i < elonInfo.length; i++){
//       elonLike = elonLike + elonInfo[i].public_metrics.like_count
//   }

//   let elonQuote = 0
//   for(let i = 0 ; i < elonInfo.length; i++){
//       elonQuote =  elonQuote + elonInfo[i].public_metrics.quote_count
//   }

//   let elonReply = 0
//   for(let i = 0 ; i < elonInfo.length; i++){
//       elonReply =  elonReply+ elonInfo[i].public_metrics.reply_count
//   }

//   let elonRetweet = 0
//   for(let i = 0 ; i < elonInfo.length; i++){
//       elonRetweet =  elonRetweet + elonInfo[i].public_metrics.retweet_count
//   }

//   // creating pie chart

      


  var pieData = [{
      values: [A,B,C,D,E,F],
      labels: ['>5k', '>10K', '>20K','>40K','>80k','>160K'],
      type: 'pie'
    }];
    
    var pieLayout = {
      height: 850,
      width: 1200
    };
    
    Plotly.newPlot('pie', pieData, pieLayout);






//   }





// });

})
    

    //   function optionChanged(selectedSample){
    //       pieChart(selectedSample);
    //   }
    