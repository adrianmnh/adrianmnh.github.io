---
title: Contact Information
icon: fas fa-info-circle
order: 4
---





<!-- > Add Markdown syntax content to file `_tabs/about.md`{: .filepath } and it will show up on this page.
{: .prompt-tip } -->
<html>
  <head>
    <style>
      .progress-bar {
        width: 100%;
        height: 20px;
        background-color: #ddd;
        position: relative;
        float: left;
        margin: 1%;
      }
      .progress {
        width: 0%;
        height: 100%;
        background-color: #4CAF50;
        position: absolute;
        top: 0;
        left: 0;
        transition: width 1s;
        border-radius: 0px;
      }
    </style>
  </head>
  <body>

    <span>
      adrian_noa@icloud.com
    </span>
    <div class="progress-bar-container">
      <div class="progress-bar" data-max-percent="98">
        <div class="progress"></div>
      </div>

      <div class="progress-bar" data-max-percent="60">
        <div class="progress"></div>

      </div>
    </div>

    <span>
      https://www.linkedin.com/in/adrianmnh/
      </span>

    <div class="progress-bar-container">
      <div class="progress-bar" data-max-percent="15">
        <div class="progress"></div>
      </div>
      <div class="progress-bar" data-max-percent="50">
        <div class="progress"></div>
      </div>
    </div>

    <script>
      var progressBars = document.querySelectorAll('.progress-bar');
      var percent = 0;

      function updateProgress(bar) {
        var barMaxPercent = bar.getAttribute('data-max-percent');
        percent += 2;
        bar.querySelector('.progress').style.width = percent + '%';
        if (percent < barMaxPercent) {
          setTimeout(updateProgress, 10, bar);
        }
      }
      progressBars.forEach(function(bar) {
        updateProgress(bar);
      });
    </script>


      <span>
      https://github.com/adrianmnh   
      </span>
  </body>
</html>
