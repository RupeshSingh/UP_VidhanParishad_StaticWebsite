function confirm_alert(node) {
  return confirm(
    "This link shall take you to a page/website outside this website.",
  );
}

function printDiv(divId) {
  var printContents = document.getElementById(divId).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}
