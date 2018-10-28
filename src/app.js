import * as d3 from 'd3'

// Selecting and appending elements
d3.select('#root')
  .append('h5')
  .append('text')
  .text(`D3 version: ${d3.version}`)

d3.select('body')
  .append('svg')
  .append('rect')
  .attr('height', 50)
  .attr('width', 50)
  .style('fill', 'blue')

const w = 200;
const h = 100
const padding = 2
const dataset = [5, 10, 15, 20, 25]

const svg = d3.select('body')
              .append('svg')
              .attr('width', w)
              .attr('height', h)

svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
      .attr('x', (d, i) => i * (w/dataset.length))
      .attr('y', (d) => h - (d * 4))
      .attr('width', (w/dataset.length) - padding)
      .attr('height', (d) => d * 4)

// Loading external data
d3.csv('/data/sample.csv', (error, dataset) => {
  dataset.forEach((data) => {
    console.log(data)
  })
})
