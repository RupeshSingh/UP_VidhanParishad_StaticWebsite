
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'दलीय स्थिति'],
          ['भारतीय जनता पार्टी (79%)', 79],
          ['समाजवादी पार्टी (10%)', 10],
          // ['बहुजन समाज पार्टी (4%)', 4],
          // ['भारतीय राष्‍ट्रीय कांग्रेस (आई0) (1%)', 1],
          ['अपना दल (सोनेलाल) (1%)', 1],
          ['निर्बल इण्डियन शोषित हमारा आम दल (1%)', 1],
          ['जनसत्‍ता दल लोकतांत्रिक (1%)', 1],
          ['राष्ट्रीय लोक दल (1%)', 1],
          ['सुहेलदेव भारतीय समाज पार्टी (1%)', 1],
          ['शिक्षक दल (गैर राजनीतिक) (1%)', 1],
          ['निर्दलीय समूह (2%)', 2],
          ['निर्दलीय (2%)', 2],
          ['रिक्‍त (1%)', 1]

        ]);

        // Optional; add a title and set the width and height of the chart
        var options = { 'title': '' };

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }

    function columnchart(){

      var data = google.visualization.arrayToDataTable([
        ["Element", "", { role: "style" } ],
        ["भारतीय जनता पार्टी", 79, "#b87333"],
        ["समाजवादी पार्टी", 10, "silver"],
        ["अपना दल(सोनेलाल) पार्टी", 1, "gold"],
        ["निर्बल इण्डियन शोसित हमारा आम दल", 1, "color: #e5e4e2"],
        ["जनसत्‍ता दल लोकतांत्रिक", 1, "gold"],
        ["राष्ट्रीय लोक दल", 1, "color: #e5e4e2"],
        ["सुहेलदेव भारतीय समाज पार्टी", 1, "gold"],
        ["शिक्षक दल (गैर राजनीतिक)", 1, "color: #e5e4e2"],
        ["निर्दलीय समूह", 1, "gold"],
        ["निर्दलीय", 1, "color: #e5e4e2"],
        ["रिक्‍त", 1, "gold"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {

      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
    }


