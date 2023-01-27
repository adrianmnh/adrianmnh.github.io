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