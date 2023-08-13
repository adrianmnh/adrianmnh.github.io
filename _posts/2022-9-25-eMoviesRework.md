---
title: eMovies Model Transformation
author: adrian
date: 2022-9-25 15:02:00 -400
categories: [Data Analytics, Data Modeling a Movie Streaming ]
tags: [Data Modeling , erwin Data Modeler, Physical Data Model, Conceptual Data Model , Logical Data Model, SQL Server, Quest Software]
pin: true
math: true
mermaid: true
# image:
#   path: /
#   width: 800
#   height: 500
#   alt: 
---

**`background`**

eMovies is a data model provided by Quest's ERwinDM sample with Logical and Physical models that describe an outdated Movie rental service.

The purpose of this project is to rework the models into a modern format

<a href='https://github.com/adrianmnh/dm-vm' style='font-size:1em; font-weight:bold'> More on Quest's eMovies and data models </a>

**`Features of my Models`**

- [X] Includes a Conceptual Model
- [X] Includes a Logical Model
- [X] Includes a Physical Model
- [ ] Includes views to facilitate database usage
- [X] Multi-dimensional model layers to caputure how the business works by precisely representing business rules
- [ ] Model represents Navigation by capturing how the business is monitored
- [X] Multiple bridge tables allow multi-value attributes
- [X] PDM Tables are Normalized to 3rd normal form (3NF)
- [X] User defined domains for all attributes
- [X] Default values for non null attributes
- [X] Constraints for attributes
- [X] Different methods of payments, multi payment feature
  
**`model demo`**

<a href="https://github.com/adrianmnh/dm-vm/tree/mainBranch/project1" class="large-link"> Link to Project repo</a>


<p class="video" >
<iframe 
class="embeddedObject shadow resizable" 
name="embedded_content" 
scrolling="no" frameborder="4" type="text/html" 
        style="overflow:hidden;" src="https://www.screencast.com/users/LawlietAdrianLaw/folders/Default/media/8bb7cc47-7ccf-413a-b41e-a865b01daec2/embed" 
 
webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</p>




Conceptual Data Model without Payment entities
<img src="https://raw.githubusercontent.com/adrianmnh/dm-vm/mainBranch/project1/Diagrams/ConceptualModel.png" width="100%">

Logical Data Model with multi-payment methods
<img src="https://raw.githubusercontent.com/adrianmnh/dm-vm/mainBranch/project1/Diagrams/LogicalModel.png" width="100%">

Physical Data Model with Attributes and Columns
<img src="https://raw.githubusercontent.com/adrianmnh/dm-vm/mainBranch/project1/Diagrams/PhysicalModel.png" width="100%">