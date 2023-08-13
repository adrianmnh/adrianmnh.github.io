---
title: CUNYfirst Automated Course Registration(for Windows)
author: adrian
date: 2022-1-25
categories: [Web Scraping, Windows Command Line Application]
tags: [🔥Python Programming Language, Selenium, Windows cmd, PowerShell ]
pin: false
math: true
mermaid: true
# image:
#   path: /
#   width: 800
#   height: 500
#   alt: 
---
### **`depracated after Fall 2022 : CUNYfirst 9.2 Upgrade`**


<img src="/posts/linebreak-fire.png" class="line-break" >



**`usage`**

<!-- copy and paste. Modify height and width if desired. -->
<p class="video" >
<iframe 
class="embeddedObject shadow resizable" 
name="embedded_content" 
scrolling="no" frameborder="4" type="text/html" 
        style="overflow:hidden;" src="https://www.screencast.com/users/LawlietAdrianLaw/folders/Default/media/e876c450-733a-463f-aa88-7c8140f11eec/embed" 
 
webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></p>

1. download the contents of this project repo
2. create a virtualenv to prevent clashes with user environment
3. on the command-line:   `pip3 install -r requirements.txt`
4. once all dependencies have been installed:  `python _src\driver.py `
5. Follow the prompts on screen

_*This project does not store any user data outside of local environment_


<img src="/posts/linebreak-fire.png" class="line-break" >


**`source code`**

<a href="https://github.com/adrianmnh/CUNYfirst_RegistrationScraper"> move to project Repo</a>

<br>

**`background`**

During the fall of 2021, many students at Queens College complained about issues encountered in CUNYFirst during course registration, particularly for high-level courses required to graduate with a bachelor's degree.

As a computer science major, I found myself in the same predicament, unable to register for the high-level CS electives I really wanted and being forced to settle with the less desirable ones. The CS department was unable to offer over-tallies, so I resorted to other tools such as the Coursicle app, which sends notifications for courses being tracked (up to one with the free subscription) and pings every single user tracking the course that the classroom has at least one "open" seat vacancy.

At this point, I assume a number upward of 10 users would rush to their browsers and open their saved CUNYFirst bookmarks with the desired courses and try to send requests to the CUNY servers to register for the course(s) selected.

From the moment the notification is sent and received, the amount of time needed to proceed with the process of adding or swapping courses takes at least a minute, depending on the Coursicle app's way of handling these events.

I received so many of these "pings", dropped everything I was doing to re-register, and found myself disappointed every single time. The rollercoaster of emotions was extremely frustrating, but I found a way to channel them and got inspired to build this project.
