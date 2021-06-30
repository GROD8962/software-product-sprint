// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hirasawa Yui', 'Tainaka Ritsu', 'Akiyama Mio', 'Kotobuki Tsumugi', 'Nakano Azusa'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

async function showString() {
  const responseFromServer = await fetch('/hello');
  const textFromResponse = await responseFromServer.json();


  const stringContainer = document.getElementById('string-container');
  stringContainer.innerText = textFromResponse;
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/** Creates a chart and adds it to the page. */
function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Animal');
  data.addColumn('number', 'Count');
        data.addRows([
          ['2001', 23],
          ['2002', 22],
          ['2003', 23],
          ['2004', 23],
          ['2005', 28],
          ['2006', 28],
          ['2007', 25],
          ['2008', 28],
          ['2009', 27],
          ['2010', 6],
          ['2015', 18],
          ['2016', 18]
        ]);

  const options = {
    'title': 'Distribution of BIONICLE sets per year (2001-2010; 2015-2016)',
    'width':600,
    'height':600
  };

  const chart = new google.visualization.PieChart(
      document.getElementById('chart-container'));
  chart.draw(data, options);
}
