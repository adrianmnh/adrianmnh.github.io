---
title: Threshold Selection
author: adrian
date: 2022-10-2
categories: [Image Processing, Thresholding Algorithm]
tags: [🔥C++ Programming Language, Histogram]
pin: false
math: true
mermaid: true
# image:
#   path: /
#   width: 800
#   height: 500
#   alt: 
---


**`Objective`**

To take an image's histogram from a text file and find the best threshold using the Gaussian automatic threshold selection method.

This process yields a Gaussian function which is graphed along with the histogram, and the best threshold on the output files

<a href="../../assets/pdf/threshold.pdf" class="large-link"> Project PDF source code and algorithms</a>

**`usage`**

1. Create a new folder
2. Download main.cpp and data files
4. Run the following commands

```c
g++ main.cpp -o main.exe
./main.exe image_histogram1.txt outFile1_1.txt outFile1_2.txt
./main.exe image_histogram2.txt outFile2_1.txt outFile2_2.txt
```


<a href='https://github.com/adrianmnh/ImageDataProcessing/tree/mainBranch/3-AutomaticThresholdSelection' class="large-link"> Link to Project repo </a>




