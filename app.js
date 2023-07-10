console.log("Confirm that this is working")

const URL = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

function optionChanged(SubjectID) {
// TO DOs:
// filter by Subject ID
// Add demographics table

    d3.json(URL).then(d=>{

        // -----------------Bar Chart--------------------
        let Samples = d.samples
        
        for (let i = 0; i < Samples.length; i++) {
            var xValues = Samples[i].sample_values.slice(0,10)
            var yValues = Samples[i].otu_ids.slice(0,10)
            var hoverText = Samples[i].otu_labels.slice(0,10)
        }

        yValuesString = yValues.map(x => `OTU ${x}`)

        let trace1 = {
            // reversing so they can be ordered in descending
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
 
        // -----------------Bubble Chart--------------------
        let Samples2 = d.samples
        
        for (let i = 0; i < Samples2.length; i++) {
            var xValues2 = Samples2[i].sample_values.slice(0,10)
            var yValues2 = Samples2[i].otu_ids.slice(0,10)
            var hoverText2 = Samples2[i].otu_labels.slice(0,10)
        }

        let trace2 = {
            x: yValues2,
            y: xValues2,
            text: hoverText2,
            mode: 'markers',
            marker: {
                color: yValues2,
            size: xValues2   
            }
            
        }

        let traceData2 = [trace2]

        let layout2 = {
            title: 'Scatter Plot'
        }
        // -----------------Demographics table--------------------
        Plotly.newPlot('plot2', traceData2, layout2)

        let Samples3 = d.samples
        d3
        .select('h3')
        .selectAll('p')
        .data(d)
        .enter()
        .append('p')
        .text('test')

        console.log(d)
    }) 
}

function initialize() {
    // populate the dropdown menu
    d3.json(URL).then(d=>{
        var subjectIDs = d.names;
        console.log(subjectIDs);
        var select = d3.select('#selDataset');
        for (let i = 0; i < subjectIDs.length; i++) {
            select.append("option").attr("value",subjectIDs[i]).text(subjectIDs[i]);   
        }
    });
    // draw the plots for the first subject
    console.log(initialize);

}

initialize();
