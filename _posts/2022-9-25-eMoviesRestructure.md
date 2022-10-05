---
title: eMovies Model Transformation
author: adrian
date: 2022-9-25 15:02:00 -400
categories: [Databases, Data Modeling]
tags: [data , ERwinDM, PDM, CDM, LDM]
pin: false
math: true
mermaid: true
image:
  path: 
  width: 800
  height: 500
  alt: 
---

eMovies is a data model with Logical and Physical models that describe an outdated Movie rental service.

The purpose of this project is to rework the models into a modern format

<a href='https://github.com/adrianmnh/dm-vm' style='font-size:1em; font-weight:bold'> More on Quest's eMovies and data models </a>

## Features of my Models

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
  
# Model Demo

**CTRL + Click on link to open in new TAB**

`Submission Video v1 GoogleDrive`

<a href="https://drive.google.com/file/d/1CM1FJJYBrqyxCldJN0Mcd0Y1VMcKwdBe/view?usp=sharing" title="eMovies Reworked"><img src="https://github.com/adrianmnh/dm-vm/raw/mainBranch/eMovies/LOGICAL.jpg" alt="GoogleDrive link" width=100px/></a>

`Submission Video v1 BlackBoard`

<a href="https://bbhosted.cuny.edu/webapps/assignment/uploadAssignment?course_id=_2188140_1&content_id=_70625575_1&mode=DEFAULT&currentAttemptIndex=2&attempt_id=_141771406_1#" title="eMovies Reworked"><img src="https://github.com/adrianmnh/dm-vm/raw/mainBranch/eMovies/LOGICAL.jpg" alt="BlackBoard link" width=100px/></a>


<a href='https://github.com/adrianmnh/dm-vm/tree/mainBranch/project1' style='font-size:1.5em; font-weight:bold'> Link to Project source code </a>



Conceptual Data Model without Payment entities
<img src="https://raw.githubusercontent.com/adrianmnh/dm-vm/mainBranch/project1/Diagrams/ConceptualModel.png" >

Logical Data Model with multi-payment methods
<img src="https://raw.githubusercontent.com/adrianmnh/dm-vm/mainBranch/project1/Diagrams/LogicalModel.png" >

Physical Data Model with Attributes and Columns
<img src="https://raw.githubusercontent.com/adrianmnh/dm-vm/mainBranch/project1/Diagrams/PhysicalModel.png" >