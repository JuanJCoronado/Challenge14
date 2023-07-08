console.log("Confirm that this is working")

let url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

// -----------------Bar Chart--------------------

d3.json(url).then(d=>{
    console.log(d)
    let Samples = d.samples
    
    for (let i = 0; i < Samples.length; i++) {
        var xValues = Samples[i].sample_values.slice(0,10)
        var yValues = Samples[i].otu_ids.slice(0,10)
        var hoverText = Samples[i].otu_labels.slice(0,10)
    }

    yValuesString = yValues.map(x => `OTU ${x}`)
    console.log(typeof(yValuesString))

    console.log(yValues)
    console.log(yValuesString)

     let trace1 = {
        x: xValues.reverse(),
        y: yValuesString.reverse(),
        text: hoverText.reverse(),
        type:'bar',
        orientation:'h'
    }

    let traceData = [trace1]

    let layout = {
        title: 'Top 10 OTUs'
    }

    Plotly.newPlot('plot', traceData, layout)
    console.log(yValues)
}) 



// -----------------Bubble Chart--------------------

 d3.json(url).then(d=>{
    console.log(d)
    let Samples2 = d.samples
    
    for (let i = 0; i < Samples2.length; i++) {
        var xValues2 = Samples2[i].sample_values.slice(0,10)
        var yValues2 = Samples2[i].otu_ids.slice(0,10)
        var hoverText2 = Samples2[i].otu_labels.slice(0,10)
        // var color2 = 
    }


     let trace2 = {
        x: yValues2,
        y: xValues2,
        text: hoverText2,
        mode: 'markers',
        marker: {
            color: [xValues2],
        //   size:[yValues2]   This displays the values blank
          }
        
    }

    let traceData2 = [trace2]

    let layout2 = {
        title: 'Scatter Plot'
    }

    Plotly.newPlot('plot2', traceData2, layout2)

})  


// -----------------Bar Chart Backup (dont delete)--------------------

/*
d3.json(url).then(d=>{
    console.log(d)
    let Samples2 = d.samples
    
    for (let i = 0; i < Samples2.length; i++) {
        var xValues2 = Samples2[i].sample_values.slice(0,10)
        var yValues2 = Samples2[i].otu_ids.slice(0,10)
        var hoverText2 = Samples2[i].otu_labels.slice(0,10)
    }

    yValuesString2 = yValues2.map(x => `OTU ${x}`)
    console.log(typeof(yValuesString2))

    console.log(yValues2)
    console.log(yValuesString2)

     let trace2 = {
        x: xValues2,
        y: yValuesString2,
        text: hoverText2,
        type:'bar',
        orientation:'h'
    }

    let traceData2 = [trace2]

    let layout = {
        title: 'Top 100 OTUs'
    }

    Plotly.newPlot('plot2', traceData2, layout)
    console.log(yValues)
})  */