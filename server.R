library(shiny)
library(r2d3)

# Define server logic required to draw a histogram
shinyServer(function(input, output) {
  
  output$d3 <- renderD3({
    r2d3(
      data <- read.csv("./output.csv"),
      script = "oldbubble.js"
    )
  })
})
