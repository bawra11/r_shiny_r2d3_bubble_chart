
library(shiny)
library(r2d3)

# Define UI for application that draws a histogram
shinyUI(fluidPage(
  
  # Application title
  titlePanel("Bubble Plot"),

  d3Output("d3")
))
