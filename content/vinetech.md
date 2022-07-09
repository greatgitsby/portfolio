---
title: Senior Capstone Project
desc: Autonomous driving, machine learning, and more.
created: 2022-06-03
updated: 2022-07-08
---

Wow, what a whirlwind over the past few months. As I continue
processing what I experienced this last year of university, 
I wanted to go into depth on the project I put most of my
energy into: my Senior Design capstone project. As the technical manager
working alongside Ella Rand, our project manager, our team provided the
George Fox research faculty with an extremely useful tool and a baseline for future
development. Among the myriad projects we started and finished,
most revolved around two joint efforts:

- An autonomous, self-driving rover that navigated the vineyard block
  and took pictures of all the grapes in that block, gathering the raw
  data for processing later, and
- A set of machine learning models that took raw images
  of vineyard grapes and outputted total grape yield in kilograms
  for the entire block (a section of the total vineyard)

On both fronts, especially on the rover side, we accomplished more than
I hoped for; this came down entirely to the team I was privileged to
work with.

## Rover

First, we spent most of our time developing the autonomous rover.
We inherited most of the rover hardware, developed over the last four years,
in 'rough' condition: while
it would drive (occasionally), there were a number of
bugs that made manual driving unsafe and unstable. As well,
the rover could not drive in an autonomous mode. We set
out to fix the bugs and make the rover incredibly safe
to drive, and ultimately accomplished those goals.

![Jared Perry and I made it onto a banner for the GFU engineering program.](/img/vinetech/banner.jpg)

![Here's the front of the rover!](/img/vinetech/rover-1.jpg)
![Side profile of the rover -- running visualizations](/img/vinetech/rover-2.jpeg)
![Internals of rover -- bottom](/img/vinetech/rover-3.jpeg)
![Internals of rover -- top](/img/vinetech/rover-5.jpeg)
![More visualization software -- live feed + rover POV](/img/vinetech/rover-4.jpeg)

### Autonomous Driving
*Coming soon*

## Machine Learning

Finally, the machine learning portion of the project taught me a ton
around the entire ML field, new to me my senior year.

We inherited a model developed by one of the faculty doing research
on this team that he rewrote from student code in years prior.
This model was really accurate (~95-98% accurate with in-year predictions,
data from 10 weeks before harvest predicting yields at harvest); however,
it took a long time to train on powerful hardware and very little data.
This was a problem because it blocked our team from doing
larger scale experiments with more dataa nd would make iterating on
models and experiments very slow.

My goal was to figure out the source of this slowdown. Ultimately, after profiling
the machine learning processes in Python, we realized image decoding and resizing was almost 85%
of the total computation performed. So, we stored a resized version of the images
(4000x3000 -> 400x300) in our data store so when they were retrieved by a training
process, they were the right size and very little decoding was needed. This brought
our overall data transfer down by an order of magnitude and improved our
training time by ~85% with no loss in model accuracy. This was a huge win and allowed
one of our teammates to begin running hundreds of experiments in a number of hours
rather than taking potentially weeks.

![Example experiment](/img/vinetech/ml-experiment.jpg)

## Senior Design Expo

Our work culminated in the Senior Design Expo, an event
dedicated to us to showcase our year's work. I'm extremely
proud of my team for what we accomplished: we provided
our advisors (the people carrying on the research
project to the next year) with a complete product: we
maximized the safety and stability of the rover for
manual control, implemented the baseline autonomous driving
system so it can drive itself down the vineyard rows,
and built a data pipeline so the rover will record images
as it drives.

![Our team poster](/img/vinetech/poster.jpg)

![Tearing down at the end of expo! Pictured are Grant Walker, Joshua Sills, Jared Perry, and Luke Havener (L-R)](/img/vinetech/expo.jpg)

![My team! Jared Perry, myself, Jamie Fontaine, Luke Havener, Ella Rand, Joshua Sills, and Grant Walker (L-R)](/img/vinetech/homies.jpg)