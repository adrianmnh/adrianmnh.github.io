---
title: Compression and Decompression via Distance Transform
author: adrian
date: 2022-11-2
categories: [Image Processing, Skeleton Compression Algorithm]
tags: [🔥C++ Programming Language, Binary Image]
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

Given a binary image, the objective is to produce a loss-less compression via the skeleton of 8-connectness distance transform. 

To ensure correctness, a decompression algorithm is used on the compressed file.

<a href="../../assets/pdf/compression.pdf" class="large-link"> Project PDF source code and algorithms</a>

**`usage`**

1. Create a new folder
2. Download main.cpp and binary images in text format
4. Run the following commands

```c++
g++ main.cpp -o main.exe
./main.exe img1
./main.exe img2
```


<a href='https://github.com/adrianmnh/ImageDataProcessing/tree/mainBranch/3-AutomaticThresholdSelection' class="large-link"> Link to Project repo </a>

<!-- **`background`** -->


