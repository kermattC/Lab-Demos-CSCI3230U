$(document).ready(function() {

    /*
        How to make an Ajax call
    */

    $.ajax({
        type: "GET",
        url: "grades.csv",
        dataType: "text",
        success: function(response){
            console.log("Made an Ajax call!")
            console.log("Before string splitting:")
            console.log(response)

            let lines = response.split('\n')
            console.log("After string splitting: ")
            for (let i = 0; i < lines.length; i++){
                console.log(lines[i])
            }
        }
    });

    /*
        How to make a bar graph on d3
        Original version from: https://d3-graph-gallery.com/graph/barplot_basic.html
        This version is changed a bit to make it more relatable to the lab
    */

    // set the dimensions and margins of the graph
    var margin = {top: 30, right: 30, bottom: 70, left: 60},
    width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#barChart")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    var data =  [
        {student: 'student0', grade: 80},
        {student: 'student1', grade: 40},
        {student: 'student2', grade: 100},
        {student: 'student3', grade: 75},
        {student: 'student4', grade: 10},
    ]

    // create x-axis
    var x = d3.scaleBand()
        .domain(data.map(function(d) {return d.student;}))
        .range([0, width])
    
    // append x-axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))

    // create y-axis
    var y = d3.scaleLinear()
        .domain([100, 0])
        .range([0, height])

    // append y-axis
    svg.append("g")
        .call(d3.axisLeft(y))

    var barNumber = 0
    // create bars
    svg.selectAll("bar")
        .data(data) // .data() needs to be before .enter()
        .enter()
        .append("rect")
            .attr('id', function(d) {return d.student})
            .attr('x', function(d) {return x(d.student) + 18;})
            .attr('y', function(d) {return y(d.grade)})
            .attr('width', 25)
            .attr('height', function(d) {return height - y(d.grade) })
            .attr("fill", "#1c408c")
            // demo purposes - adding an on click function to show how you can change the size of bars
            .on("click", function(bar) {
            
            // perform string splitting on the ID to get the respective number to the bar
            var temp = String(this.id)
            var barID = temp.split('student')[1]

            // new preset data. This is supposed to simulate when you select new data that you want to display
            newData = [
                {student: 'student0', grade: 20},
                {student: 'student1', grade: 30},
                {student: 'student2', grade: 60},
                {student: 'student3', grade: 90},
                {student: 'student4', grade: 100},
            ]

            // using d3.select, we can now update the values. Basically uses the same technique as the bars earlier (lines 51 and 53) but the syntax is a little different
            d3.select(this).attr("y", y(newData[parseInt(barID)].grade));
            d3.select(this).attr("height", height  - y(newData[parseInt(barID)].grade));

            /*
                Old code: Not the ideal way to change the bar according to their respective bar number. But I'll just keep it in here in case
            */
            // // the 'bar' variable is passed into the function upon clicking the bar with its respective context. ie: if I click on the first bar, 'bar' equal to the details in the first index of the 'data' array
            // barName = bar.student
            // // console.log(barName)
    
            // // not the best way to find which bar corresponds to which index, but it works for this demo
            // var barNumber;
            
            // if (barName == 'first'){
            //     barNumber = 0;
            // } else if (barName == 'second'){
            //     barNumber = 1;
            // } else if (barName == 'third'){
            //     barNumber = 2;
            // } else if (barName == 'fourth'){
            //     barNumber = 3;
            // } else if (barName == 'fifth'){
            //     barNumber = 4;
            // }


            // d3.select(this).attr("y", y(newData[barNumber].grade));
            // d3.select(this).attr("height", height  - y(newData[barNumber].grade));

            });
});