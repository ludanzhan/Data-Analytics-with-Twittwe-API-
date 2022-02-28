d3.json("static/tweet.json").then(function(tweetdata){
    const data = tweetdata;
    let names = data[1].users;
    let values = Object.values(names)
    console.log(data);
    console.log(data[1].tweets[4].data)
    // grab the dropdown menu
    const selectBox = d3.selectAll("#selDataset");
        
    // adding ids to the dropdown menu
    for(let i =0; i< names.length; i++){
        selectBox.append("option").text(Object.keys(values[i]));
        //console.log(Object.keys(values[i]));
    }

    // default chart
    updateinfo(0)
// //    <!---------------------Collecting count information -------------------------------------->
//     collect elon mask info
    let elonInfo = data[1].tweets[0].data;
    console.log(elonInfo);

    let elonLike =0;
    let elonLikecounts=[];
      
      
    for(let i = 0 ; i < elonInfo.length; i++){
        elonLike = elonLike + elonInfo[i].public_metrics.like_count;
        elonLikecounts.push(elonInfo[i].public_metrics.like_count);
    }
    console.log(elonLikecounts);

    let elonQuote = 0
    let elonQuotecounts=[];
    for(let i = 0 ; i < elonInfo.length; i++){
        elonQuote =  elonQuote + elonInfo[i].public_metrics.quote_count;
        elonQuotecounts.push(elonInfo[i].public_metrics.quote_count);
    }
    console.log(elonQuotecounts);

    let elonReplycounts=[];
    let elonReply = 0
    for(let i = 0 ; i < elonInfo.length; i++){
        elonReply =  elonReply+ elonInfo[i].public_metrics.reply_count;
        elonReplycounts.push(elonInfo[i].public_metrics.reply_count);
    }

    console.log(elonReplycounts);

    let elonRetweetcounts=[];
    let elonRetweet = 0
    for(let i = 0 ; i < elonInfo.length; i++){
        elonRetweet =  elonRetweet + elonInfo[i].public_metrics.retweet_count;
        elonRetweetcounts.push(elonInfo[i].public_metrics.retweet_count);
    }
    console.log(elonRetweetcounts);

    // collect obama info
    let obamaInfo = data[1].tweets[1].data;
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
    let cristianoInfo = data[1].tweets[2].data;
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
    let btsInfo = data[1].tweets[3].data;
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
    let wendyInfo = data[1].tweets[4].data;
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
    let shroudInfo = data[1].tweets[5].data;
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
     let CDawgVAInfo = data[1].tweets[6].data;
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
    let charliInfo = data[1].tweets[7].data;
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
    
    let nflInfo = data[1].tweets[8].data;
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
    let instagramInfo = data[1].tweets[9].data;
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

//     //<!---------------------Create Chart ----------------------------------------------->

     //create scatter plot
        var scatterTrace1 = {
            x: [  obamaLike/100, wendyLike/100, shroudLike/100, CDawgVALike/100, charliLike/100, nflLike/100, instagramLike/100,elonLike/100],
            y: [  obamaRetweet/100, wendyRetweet/100, shroudRetweet/100, CDawgVARetweet/100, charliRetweet/100, nflRetweet/100, instagramRetweet/100,elonRetweet/100],
            mode: 'markers+text',
            marker: {
                size: 20
              },
            text: ['Barack Obama','wendy', 'shroud', 'CDawgVA','Charli Damelio','NFL','instagram','Elon Musk'],
            textposition: 'top center',
            name: 'Retweet Counts',
            type: 'scatter'
          };
          
        let scatterLayout = {    
            showlegend: true,
            xaxis: {title:'Like Counts'},

            height: 600,
            width: 1200
        };
          var scatterTrace2 = {
            x: [  obamaLike/100, wendyLike/100, shroudLike/100, CDawgVALike/100, charliLike/100, nflLike/100, instagramLike/100,elonLike/100],
            y: [  obamaQuote/100, wendyQuote/100, shroudQuote/100, CDawgVAQuote/100, charliQuote/100, nflQuote/100, instagramQuote/100,elonQuote/100],
            marker: {
                size: 20
              },
            text: ['Barack Obama','wendy', 'shroud', 'CDawgVA','Charli Damelio','NFL','instagram','Elon Musk'],
            textposition: 'top center',
            name: 'Quote Counts',
            
            mode: 'markers+text',           
            type: 'scatter'
          };
        

          var scatterTrace3 = {
            x: [  obamaLike/100, wendyLike/100, shroudLike/100, CDawgVALike/100, charliLike/100, nflLike/100, instagramLike/100,elonLike/100],
            y: [  obamaReply/100, wendyReply/100, shroudReply/100, CDawgVAReply/100, charliReply/100, nflReply/100, instagramReply/100,elonReply/100],
            marker: {
                size: 20
              },
            text: ['Barack Obama','wendy', 'shroud', 'CDawgVA','Charli Damelio','NFL','instagram','Elon Musk'],
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
          
          Plotly.newPlot('scatterall', scatterData, scatterLayout,{displaylogo: false});
        


//     //<!---------------------Comparison bar chart -------------------------------------->

//     // create like count comparison bar chart
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
        x: ["Elon Musk","Barack Obama","Wendys", "Shroud", "CDawgVA", "Charli Damelio", "NFL", "Instagram"],
        y: [elonLike/elonInfo.length,obamaLike/100,wendyLike/100, shroudLike/100, CDawgVALike/100, charliLike/100, nflLike/100, instagramLike/100],
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

//     //--------create reply count comparison bar chart--------------------------------------------------------------------------

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
        x: ["Elon Musk","Barack Obama","Wendys", "Shroud", "CDawgVA", "Charli Damelio", "NFL", "Instagram"],
        y: [elonReply/elonInfo.length,obamaReply/100,wendyReply/100, shroudReply/100, CDawgVAReply/100, charliReply/100, nflReply/100, instagramReply/100],
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
   
//     //------------------create retweet count comparison bar chart----------------------------------------------------------------
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
        x: ["Elon Musk","Barack Obama","Wendys", "Shroud", "CDawgVA", "Charli Damelio", "NFL", "Instagram"],
        y: [elonRetweet/elonInfo.length,obamaRetweet/100,wendyRetweet/100, shroudRetweet/100, CDawgVARetweet/100, charliRetweet/100, nflRetweet/100, instagramRetweet/100],
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

//      //------------------create quote count comparison bar chart----------------------------------------------------------------
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
        x: ["Elon Musk","Barack Obama","Wendys", "Shroud", "CDawgVA", "Charli Damelio", "NFL", "Instagram"],
        y: [elonQuote/elonInfo.length,obamaQuote/100,wendyQuote/100, shroudQuote/100, CDawgVAQuote/100, charliQuote/100, nflQuote/100, instagramQuote/100],
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

    console.log(data[1]);
    console.log(data[1].tweets[0].data);
   
     // function to update panel info
    function updateinfo(id){
        // console.log(data[1].tweets[0].data);
        let info=data[1].tweets[id].data;
        console.log(info);

        // extract info for each user
        let arrayLikecounts=[];
        let likeCount = 0
        for(let i = 0 ; i < info.length; i++){
            
            likeCount = likeCount + info[i].public_metrics.like_count;
            arrayLikecounts.push(info[i].public_metrics.like_count);
        }
        likeCount = likeCount/info.length;
        


        let arrayQuotecounts=[];
        let quoteCount = 0
        for(let i = 0 ; i < info.length; i++){
            quoteCount =  quoteCount + info[i].public_metrics.quote_count;
            arrayQuotecounts.push(info[i].public_metrics.quote_count);
        }
        quoteCount = quoteCount/info.length


        let replyCount = 0
        let arrayReplycounts=[];
        for(let i = 0 ; i < info.length; i++){
            replyCount =  replyCount + info[i].public_metrics.reply_count;
            arrayReplycounts.push(info[i].public_metrics.reply_count);
        }
        replyCount = replyCount/info.length

        let retweetCount = 0
        let arrayRetweetcounts=[];
        for(let i = 0 ; i < info.length; i++){
            retweetCount =  retweetCount + info[i].public_metrics.retweet_count;
            arrayRetweetcounts.push(info[i].public_metrics.retweet_count);
        }
        retweetCount = retweetCount/info.length
    
        console.log(info[1])

        //create barchart
        let barTrace = {
            x: ["Average Like Count","Average Quote Count","Average Reply Count","Average Retweet Count"],
            y: [likeCount, quoteCount, replyCount, retweetCount],
            type: 'bar'
        }

        let layout = {
            width: 580,
            height: 420
        };

        let traceData = [barTrace];
        Plotly.newPlot("bar", traceData, layout);

        //create scatter plot for each account to look at corelation between likecounts and replycounts quotecount and retweet counts 

        var traceRetweets = {
            x:  arrayLikecounts,
            y: arrayRetweetcounts,
            mode: 'markers',
            type: 'scatter',
            name: 'retweet Counts',
            
          };
          
          var traceQuotes = {
            x:  arrayLikecounts,
            y: arrayQuotecounts,
            mode: 'markers',
            type: 'scatter',
            name: 'Quote Counts',
          };
          
          var traceReplys = {
            x: arrayLikecounts,
            y: arrayReplycounts,
            mode: 'markers',
            type: 'scatter',
            name: 'Reply Counts',
          };

          let scatterLayout = {
            showlegend: true,
            xaxis: {title:'Like Counts'},
            width: 600,
            height: 420
        };
          
          var scatterData = [traceRetweets, traceQuotes, traceReplys];
          
          Plotly.newPlot('scatter', scatterData, scatterLayout);

        //create pie chart for each account to look at the distribution of like accounts numbers

        
        let A=[];
        let B=[];
        let C=[];
        let D=[];
        let E=[];
        let F=[];
        let G=[];
        let H=[];
          
          
        for(let i = 0 ; i < arrayLikecounts.length; i++){
          
                  let counts=arrayLikecounts[i];
                  if (counts<5000){
                      A++;
                    } else if (counts<10000){
                      B++;
                    } else if (counts<20000){
                      C++;
                    } else if (counts<40000){
                        D++;
                      }else if (counts<80000){
                        E++;
                      }else if (counts<160000){
                        F++;
                      }else if (counts<320000){
                        G++;
                      }else if (counts<640000){
                        H++;
                      }

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
          
                
            var pieData = [{
                values: [A,B,C,D,E,F,G,H],
                labels: ['<5k', '<10K', '<20K','<40K','<80k','<160K','<320K','<640K'],
                type: 'pie',
                title:'Distribution of like counts'
              }];
              
              var pieLayout = {
                width: 580,
                height: 420
              };
              
              Plotly.newPlot('pie', pieData, pieLayout);

       // update info panel
        let sample_metadata = d3.select("#sample-metadata");
    
        sample_metadata.html("");
        sample_metadata.append("li").text("Average Like Count: " + likeCount.toFixed(2));
        sample_metadata.append("li").text("Average Quote Count: " + quoteCount.toFixed(2));
        sample_metadata.append("li").text("Average Reply Count: " + replyCount.toFixed(2));
        sample_metadata.append("li").text("Average Retweet Count: " + retweetCount.toFixed(2));
    }

    d3.selectAll("#selDataset").on("change", updateData);

    function updateData(){
        let dropdownMenu = d3.selectAll("#selDataset");
        // Assign the value of the dropdown menu option to a variable
        let dataset = dropdownMenu.property("value");
        console.log("value", dataset);
        console.log(Object.keys(Object.values(names)[2])[0]);

        for(let i =0; i< data[1].users.length; i++){
            if(dataset === Object.keys(Object.values(data[1].users)[i])[0]){
                updateinfo(i);
            }
        }
    }
});

// d3.json("../tweet.json").then(function(tweetdata){
//     const data = tweetdata;
//     let names = data[0];
//     let tweets=data[1];
//     console.log(tweets);
//     let values = Object.values(names);
//     // grab the dropdown menu
//     const selectBox2 = d3.select("#selDataset2");
        
//     // adding ids to the dropdown menu
//     for(let i =0; i< names.length; i++){
//         selectBox2.append("option").text(Object.keys(values[i]));
//         //console.log(Object.keys(values[i]));
// };






// // };
